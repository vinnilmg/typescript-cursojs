//eslint-disable-next-line
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/A011-exercicio/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          configFile: 'tsconfig.frontend.json', // para alterar o arquivo de configuracao (esse projeto contém 2)
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'frontend', 'assets', 'js'),
  },
  devtool: 'source-map',
};
