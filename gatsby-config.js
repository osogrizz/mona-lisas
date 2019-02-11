module.exports = {
  siteMetadata: {
    title: `Mona Lisa's`,
    description: `An online shop for books and other knickknacks.`,
    author: `Leo Torres leohtor@gmail.com`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Sacramento', 'Raleway']
        },
      },
    },
    {
      resolve: 'gatsby-plugin-snipcart',
      options: {
        apiKey: 'ZWFhMzIyOGUtOTQwMC00YjdiLThlODItM2QyNDU1N2ZkNGFiNjM2NzM4NjIxODY1NDgxNjc0',
      },
    },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: 'src',
    //     path: `${__dirname}/src/`
    //   }
    // },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: 'img',
    //     path: `${__dirname}/src/images`
    //   }
    // },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: 'img',
    //     path: `${__dirname}/static/assets`
    //   }
    // },
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `Mona Lisa's`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#0c7dff`,
        display: `minimal-ui`,
        icon: `src/images/flavicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
