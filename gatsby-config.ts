import type { GatsbyConfig } from "gatsby";
import path from "path";
require("dotenv").config();
const { WORDPRESS_GRAPHQL_ENDPOINT } = process.env;

const config: GatsbyConfig = {
  siteMetadata: {
    title: `gatsby-template`,
    siteUrl: `https://www.gatsby-template.com`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: WORDPRESS_GRAPHQL_ENDPOINT,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        workboxConfig: {
          skipWaiting: true,
          clientsClaim: true,
        },
        appendScript: path.resolve(`./src/custom-sw-code.ts`),
      },
    },
  ],
};

export default config;
