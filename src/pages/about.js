import React, { useContext } from "react"
import { PageLayout, PageTitle } from "../components"
import { Container, Image } from "react-bootstrap"
import { Link, graphql } from "gatsby"
import { ThemeContext, SEO } from "../utils"

export default ({ data }) => {
  const MediaLink = ({ title, author, link }) => (
    <li key={title} style={{ color: "gray" }}>
      <a rel="noopener noreferrer" href={link}>
        {title}      </a>
      &nbsp;-<i>{author}</i>
    </li>
  )
  const {
    author,
    occupation,
    readingList,
    // showsList,
    designations,
    unemployed,
  } = data.site.siteMetadata
  const {dark, toString } = useContext(ThemeContext)

  const bookLinks = readingList.map(book => MediaLink(book))
  // const showLinks = showsList.map(show => MediaLink(show))

  return (
    <PageLayout>
      <SEO title="About Me" />
      <PageTitle title="About Me" />
      <Container>
        <Image
          rounded
          width="150"
          // height="140"
          src={dark ? "../../images/Dolu-Avatar-dark.png" : "../../images/Dolu-Avatar-light.png"}
          alt={author}
        />
        <article className="w-75 m-auto pt-2 text-justify">
          <p className="text-center">
            {designations.map((attr, i) => (
              <span key={attr}>
                &nbsp;<b>{attr}</b>&nbsp;
                {i < designations.length - 1 && <>||</>}
              </span>
            ))}
          </p>
          <p className="i-5 mt-4 pt-2">
            Hello there! My name is <b>{`${author}`}</b>. I am a&nbsp;
            <b>{occupation}</b> currently working in the field of neuromodulation to help identify biomarkers for Major Depressive Disorder(MDD).
          </p>
          <p className="i-5">
            In my spare time, I mentor students in programming at TheCoderSchool. They certainly keep me on my toes. Also, I enjoy working on a few side projects, learning a new song on the sax, or exploring NYC with my wife.
          </p>
          <p className="i-5">
            Check out my <Link to="/projects">projects</Link> to see what I've
            been up to! Or check out songs that I have learned (Coming soon...).
            {/* Or check out my <Link to="/blog">blog</Link> to see
            what's recently caught my eye! */}
          </p>
        </article>
        <article className="w-75 m-auto">
          {unemployed && (
            <>
              <hr />
              <p className="unemployed">
                <small>
                  {/* &nbsp; */}
                  <a
                    href="mailto:dolu.obatusin@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Let's connect
                  </a>
                  !
                </small>
              </p>
            </>
          )}
          <hr />
          <h5 className="watch-list-title pt-4">
            Here are a couple of books from my reading list:
          </h5>
          <ul style={{ fontSize: "0.9rem", listStyle: "none" }}>{bookLinks}</ul>
          {/* <h5 className="watch-list-title pt-4">
            Here are a couple of shows from my watch list:
          </h5>
          <ul style={{ fontSize: "0.9rem", listStyle: "none" }}>{showLinks}</ul> */}
          {/* <h5 className="watch-list-title pt-4">
            Here are a couple of movies from my watch list:
          </h5>
          <p>
            <i>...waaaay too many to list.</i>
          </p> */}
        </article>
      </Container>
    </PageLayout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        unemployed
        occupation
        author
        designations
        readingList {
          title
          author
          link
        }
        showsList {
          title
          author
          link
        }
      }
    }
  }
`
