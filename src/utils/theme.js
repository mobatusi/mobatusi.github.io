import React, { Component } from "react"
import { Howl } from "howler"

const saxophone = new Howl({
  src: ["../../sounds/epic-saxophone.mp3"],
  volume: 0.2,
  format: ["mp3"],
})
const r2d2Audio = new Howl({
  src: ["../../sounds/R2-D2.mp3"],
  volume: 0.2,
  format: ["mp3"],
})

const defaultState = {
  dark: false,
  toString: () => `light`,
  toggleDark: () => {},
}

const ThemeContext = React.createContext(defaultState)

class ThemeProvider extends Component {
  state = {
    dark: false,
  }

  toString = () => (this.state.dark ? `dark` : `light`)

  toggleDark = () => {
    let dark = !this.state.dark
    this.setState({ dark })
    saxophone.stop()
    r2d2Audio.stop()
    // dark ? saxophone.play() : r2d2Audio.play()
    dark ? saxophone.play() : saxophone.stop()
  }

  render() {
    const { children } = this.props
    const { dark } = this.state
    return (
      <ThemeContext.Provider
        value={{
          dark,
          toggleDark: this.toggleDark,
          toString: this.toString,
        }}
      >
        {children}
      </ThemeContext.Provider>
    )
  }
}

export default ThemeContext

export { ThemeProvider }
