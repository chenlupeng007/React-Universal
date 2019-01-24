import HtmlWebPackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import WebpackNotifierPlugin from 'webpack-notifier';

const isProduction = process.env.NODE_ENV === 'production';

const titleName = 'My-App';
const templatePath = './src/index.html';

const plugins = [
  new HtmlWebPackPlugin({
    title: titleName,
    template: templatePath,
  })
];

if (isProduction) {
  plugins.push(
    new MiniCssExtractPlugin({
      filename: './css/[name].css'
    })
  );
} else {
  plugins.push(
    new BundleAnalyzerPlugin(),
    new WebpackNotifierPlugin({
      title: titleName
    })
  );
}

export default plugins;