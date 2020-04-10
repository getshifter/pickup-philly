# Philly Pickup

A one day build to support the local business community affected by the COVID-19 outbreak. It's a business directory built on the JAMstack.

## Micro-blog about the project

https://twitter.com/emaildano/status/1248638563769614338?s=20

## Helpful Links

### Blog Post
[https://www.getshifter.io/build-and-deploy-gatsby-sites-using-wordpress-shifter-netlify-and-github-actions/](https://www.getshifter.io/build-and-deploy-gatsby-sites-using-wordpress-shifter-netlify-and-github-actions/)

### Gatsby Starter Template
[https://github.com/getshifter/shifter-gatsby-github-actions-starter](https://github.com/getshifter/shifter-gatsby-github-actions-starter)

### Gatsby Build on Netlify
[https://shifter-gatsby-github-actions.netlify.com/](https://shifter-gatsby-github-actions.netlify.com/)

### Static WordPress site on Shifter
[https://cranky-hypatia2216.on.getshifter.io/](https://cranky-hypatia2216.on.getshifter.io/)

### Shifter GitHub Actions
- [https://github.com/marketplace/actions/start-shifter-wordpress](https://github.com/marketplace/actions/start-shifter-wordpress)
- [https://github.com/marketplace/actions/stop-shifter-wordpress](https://github.com/marketplace/actions/stop-shifter-wordpress)

## This Repo Explained

### [Gatsby](http://gatsbyjs.org/)

[This repo](https://github.com/getshifter/shifter-gatsby-github-actions-starter) is an example Gatsby site. You can use it as a starter or pull just what you need. It's based on [Jason Bahl's WPGraphQL starter](https://github.com/wp-graphql/gatsby-wpgraphql-blog-example).

### [Shifter](https://www.getshifter.io)

The WordPress source site is hosted on [Shifter](https://www.getshifter.io). Shifter is a static site generator for WordPress and the backend starts and stops as needed. In this case we are using it to host the content for Gatsby because we only need WordPress to start during builds and stop after they are complete. Starting and stopping WordPress reduces the number of attack vectors and Shifter can also create a static site from your existing WordPress theme. Sourcing static assets for Gatsby can be done by using the static site Shifter creates if you are not downloading files during your Gatsby build.

### [GitHub Actions](https://github.com/features/actions)

Inside [.github/workflows/main.yml](https://github.com/getshifter/shifter-gatsby-github-actions-starter/tree/master/.github/workflows), located in this project you'll find the config file for GitHub Actions. These actions cover the Gatsby build process on each push to master.

### [Netlify](https://www.netlify.com)

The static site created by Gatsby is hosted on Netlify. After the build is creating using GitHub Actions, those files are deployed to Netlify.