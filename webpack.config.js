const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');


module.exports = {
    mode: 'production',
    entry: './src/js/script.js',
    output: {
      path: `${__dirname}/dist`,
      filename: 'bundle.js'
    },
    plugins: [
        new MiniCSSExtractPlugin()
    ],
    module: {
        rules: [
            {
                test:/\.css$/i,
                use: [MiniCSSExtractPlugin.loader, 'css-loader']
            },
        ],
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin()
        ],
    },
  };