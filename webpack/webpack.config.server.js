import webpackMerge from 'webpack-merge';

import commonConfig from './webpack.config.common';

import {
  entry,
  externals,
  name,
  output,
  target
} from './configuration';

const type = 'server';

export default webpackMerge(commonConfig(type), {
  entry: entry(type),
  externals: externals(),
  name: name(type),
  output: output(type),
  target: target(type)
});