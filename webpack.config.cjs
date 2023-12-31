const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './public/dev/script.js', 
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'), 
  },
  plugins: [
    new Dotenv(),
  ],
};

