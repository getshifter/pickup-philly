// const createPosts = require(`./gatsby/createPosts`)
// const createPages = require(`./gatsby/createPages`)
// const createUsers = require(`./gatsby/createUsers`)
// const createCategories = require(`./gatsby/createCategories`)
// const createTags = require(`./gatsby/createTags`)

// exports.createPages = async ({ actions, graphql }) => {
//   await createPosts({ actions, graphql })
//   await createPages({ actions, graphql })
//   await createUsers({ actions, graphql })
//   await createCategories({ actions, graphql })
//   await createTags({ actions, graphql })
// }

exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
  const config = getConfig()

  let newConfig = {
    ...config,
    module: {
      ...config.module,
      noParse: /(mapbox-gl)\.js$/,
    },
  }

  if (stage === "build-html") {
    newConfig = {
      ...newConfig,
      module: {
        ...newConfig.module,
        rules: [
          ...newConfig.module.rules,
          {
            test: /(mapbox-gl)\.js$/,
            loader: "null-loader",
          },
        ],
      },
    }
  }

  actions.replaceWebpackConfig(newConfig)
}
