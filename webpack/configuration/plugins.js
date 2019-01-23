import HtmlWebPackPlugin from 'html-webpack-plugin';

const titleName = 'My-App';
const templatePath = './src/index.html';

const plugins = [
  new HtmlWebPackPlugin({
    title: titleName,
    template: templatePath,
  })
];

export default plugins;