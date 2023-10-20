module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: [
          '.ts',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
          '.svg',
          '.jpg'
        ],
        alias: {
          '@components': './src/components',
          '@models': './src/models',
          '@screens': './src/screens',
          '@services': './src/services',
          '@abstract': './src/abstract',
          '@navigations': './src/navigations',
          '@assets': './src/assets',
          '@root': './',
          '@constants': './src/constants'
        },
      },
    ],
  ],
};
