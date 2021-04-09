/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Mosadoluwa Obatusin`,
    author: `Mosadoluwa Obatusin`,
    firstName: `Dolu`,
    lastName: `Obatusin`,
    description: `Mosadoluwa Obatusin's personal site`,
    occupation: `Biomedical Engineer`,
    keywords: [`Mosadoluwa`, `Obatusin`, `Personal`, `Blog`, `Resume`, `Projects`, `Work`],
    siteUrl:
      process.env.URL || process.env.DEPLOY_URL || `http://localhost:8000`,
    unemployed: true,
    designations: [
      `Developer`,
      `Saxophonist`,
      `IT Guy`,
      `Gym Rat`,
    ],
    readingList: [
      {
        title: `Born to Build:`,
        author: `Jim Clifton, Sangeeta Badal, Ph.D.`,
        link: `https://www.goodreads.com/book/show/38746074-born-to-build`,
      },
      {
        title: `Never Give Up`,
        author: `Jack ma`,
        link: `https://www.goodreads.com/book/show/27036419-never-give-up`,
      },
      {
        title: `Courtship After Marriage`,
        author: `Zig Ziglar, Tom Ziglar`,
        link: `https://www.goodreads.com/book/show/808020.Courtship_After_Marriage`,
      },
    ],
    showsList: [
      {
        title: `Avatar: The Last Airbender`,
        author: `Micheal DiMartino, Bryan Konietzko`,
        link: `https://www.imdb.com/title/tt0417299/`,
      },
      {
        title: `Love, Death & Robots`,
        author: `Tim Miller`,
        link: `https://www.imdb.com/title/tt9561862/`,
      },
      {
        title: `Star Wars: The Clone Wars`,
        author: `George Lucas, Dave Filoni`,
        link: `https://www.imdb.com/title/tt0458290/`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-preload-link-crossorigin`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `Mosadoluwa Obatusin's Personal Site`,
    //     short_name: `Dolu.Obatusin`,
    //     description: `This is my personal site.`,
    //     start_url: `/`,
    //     background_color: `#fff`,
    //     theme_color: `#fff`,
    //     display: `standalone`,
    //     icon: `${__dirname}/static/favicon.ico`, // This path is relative to the root of the site.
    //   },
    // },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Raleway:300,400"],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `tomato`,
        showSpinner: true,
      },
    },
  ],
  pathPrefix: "/Dolu-Site",
}
