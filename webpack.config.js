const path = require('path');

module.exports = {
  mode: 'production',
  entry: [
    path.resolve(__dirname, './src/index.js'),  
  ],
  output: {
    library: 'bc-console',
    libraryTarget: 'umd',
    filename: 'bc-console.js',
    auxiliaryComment: 'Test Comment'
  }
};