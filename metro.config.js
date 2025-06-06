// metro.config.js

//thu vien animation
const {
    wrapWithReanimatedMetroConfig,
  } = require('react-native-reanimated/metro-config');
  
//config metro chuan
  const { getDefaultConfig: getDefaultExpoConfig } = require("@expo/metro-config")

  metroConfig = (() => {
    const config = getDefaultExpoConfig(__dirname)
  
    const { transformer, resolver } = config
  
    config.transformer = {
      ...transformer,
      babelTransformerPath: require.resolve("react-native-svg-transformer"),
    }
    config.resolver = {
      ...resolver,
      assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
      sourceExts: [...resolver.sourceExts, "svg"],
    }
  
    return config
  })
  
  module.exports = wrapWithReanimatedMetroConfig(metroConfig());