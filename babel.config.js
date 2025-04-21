module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      'react-native-reanimated/plugin', 
      ['@babel/plugin-transform-private-methods', { loose: true }]
    ],
    
  };
  
//   const { getDefaultConfig } = require('expo/metro-config');

// const config = getDefaultConfig(__dirname);

// const { transformer, resolver } = config;

// config.transformer = {
//   ...transformer,
//   babelTransformerPath: require.resolve('react-native-svg-transformer'),
// };

// config.resolver = {
//   ...resolver,
//   assetExts: resolver.assetExts.filter((ext) => ext !== 'svg'),
//   sourceExts: [...resolver.sourceExts, 'svg'],
// };

// module.exports = config;