import React, { useContext } from "react"
import { graphql } from "gatsby"
import ThemeContext from "../utils/theme"
import { PageLayout } from "../components"
import { SEO } from "../utils"
import { Container, Image } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default ({ data }) => {
  const { unemployed, firstName, lastName, occupation } = data.site.siteMetadata
  const { dark } = useContext(ThemeContext)
  return (
    <PageLayout>
      <SEO title="Home" />
      <Container className="text-center pt-5 mt-5" fluid>
        <Image roundedCircle
          width="200"
          height="200"
          fluid
          src={dark ? `../../images/Dolu-Sax.JPG` : `../../images/Dolu.jpeg`}
          alt={dark ? "Dolu Obatusin" : "Dolu Sax"}
        />
        {unemployed && (
          <p className="mt-2">
            {/* <b> Hey! I am looking for new opportunities :)</b> */}
          </p>
        )}
        <Container className="py-0 my-0">
          <h1
            style={{
              fontSize: "5rem",
              color: "black",
            }}
          >
            <span className="first-name">{firstName}</span>&nbsp;
            <span className="last-name">{lastName}</span>
          </h1>
          <p>
            {/* <i> */}
            👨🏾‍💻 {occupation} passionate about healthcare innovation &nbsp;
              {/* {dark ? `Saxophonist by night🎷` : `Saxophonist by night 🎷`} */}
              {/* {dark ? `Saxophonist by night🎷` : `Saxophonist by night 🎷`} */}
            {/* </i> */}
          </p>
        </Container>
        <hr className="my-3 w-25" />
        <div className="d-md-inline-flex icons-container">
          <a
            href="https://github.com/mobatusi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "github"]}
              className="icons github"
              title="Github"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/mosadoluwa-obatusin/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "linkedin"]}
              className="icons linkedin"
              title="LinkedIn"
            />
          </a>
          {/* <a
            href="https://www.freecodecamp.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "free-code-camp"]}
              className="icons fcc"
              title="FreeCodeCamp"
            />
          </a> */}
          {/* <a
            href="https://www.hackerrank.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "hackerrank"]}
              className="icons hr"
              title="Hackerrank"
            />
          </a> */}
          <a
            href="mailto:dolu.obatusin@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fas", "envelope"]}
              className="icons mail"
              title="e-mail"
            />
          </a>
          <a href="../../Mosadoluwa_Obatusin_Resume.pdf" target="_blank" download>
            <FontAwesomeIcon
              icon={["fas", "file-alt"]}
              className="icons file"
              title="Resume"
            />
          </a>
        </div>
      </Container>
    </PageLayout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        unemployed
        firstName
        lastName
        occupation
      }
    }
  }
`
