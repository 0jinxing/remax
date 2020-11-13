import * as path from 'path';
import * as webpack from 'webpack';
import Config from 'webpack-chain';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import baseConfig from './baseConfig';
import { reactVersion } from '../../remixVersion';
import webBaseConfig from './webBaseConfig';
import Builder from '../Builder';
import SpaEntry from '../entries/SpaEntry';

export default function webpackConfig(builder: Builder): webpack.Configuration {
  const config = new Config();

  config.output.publicPath('/');

  baseConfig(config, builder);

  const spaEntry = new SpaEntry(builder, 'index', './_index.js');
  config.entry(spaEntry.name).add(spaEntry.virtualPath);
  config.plugin('webpack-virtual-modules').use(spaEntry.virtualModule);

  config.optimization.splitChunks({
    cacheGroups: {
      remixStyles: {
        name: 'remax-styles',
        test: new RegExp(`(.css|.less|.sass|.scss|.stylus|.styl|${builder.api.meta.style})$`),
        chunks: 'all',
        minChunks: 2,
        minSize: 0,
      },
    },
  });

  config.plugin('html-webpack-plugin').use(HtmlWebpackPlugin, [
    {
      template: path.resolve(__dirname, '../../../template/index.html.ejs'),
      env: process.env.NODE_ENV,
      reactVersion: reactVersion(),
    },
  ]);

  webBaseConfig(config, builder);

  return config.toConfig();
}
