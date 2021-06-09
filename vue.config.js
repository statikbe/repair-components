module.exports = {
  configureWebpack: {
    output: {
      globalObject: 'this',
      libraryTarget: 'umd',
    },
  },
};
