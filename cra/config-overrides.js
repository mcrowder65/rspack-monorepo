const {
  override,
  addBundleVisualizer,
  addBabelPlugin,
  addBabelPreset,
  babelInclude,
} = require("customize-cra")
const path = require("path")

/**
 * Taken from https://github.com/facebook/create-react-app/issues/9870#issuecomment-792869107
 */
const getCssLoaders = (config) => {
  const loaderFilter = (rule) =>
    rule.loader && rule.loader.includes("/css-loader")

  let loaders = config.module.rules.find((rule) =>
    Array.isArray(rule.oneOf)
  ).oneOf

  loaders = loaders.reduce((ldrs, rule) => ldrs.concat(rule.use || []), [])

  return loaders.filter(loaderFilter)
}

let config = override(
  addBabelPlugin("@emotion/babel-plugin"),
  addBabelPreset("@emotion/babel-preset-css-prop"),
  (config) => {
    config.plugins = config.plugins.filter((plugin) => {
      return !plugin?.options?.typescript
    })
    // Adds human readable names to our chunks
    config.optimization.chunkIds = "named"
    // Disables eslint
    config.plugins = config.plugins.filter((plugin) => {
      return plugin.key !== "ESLintWebpackPlugin"
    })

    // https://github.com/facebook/create-react-app/issues/9870#issuecomment-881204775
    for (const loader of getCssLoaders(config)) {
      loader.options.url = {
        filter: (url) => url.startsWith("."),
      }
    }
    return config
  },
  babelInclude([
    path.resolve("src"),
    path.resolve("../shared"), // don't reference it through node_modules/@my-project/components
    // because yarn workspaces already resolves it
  ])
)

module.exports = config
