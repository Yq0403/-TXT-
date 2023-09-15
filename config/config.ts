// See https://umijs.org/docs/api/config for more about umi configurations.

import path from 'path';
import { defineConfig } from 'umi';

import routes from './routes';

export default defineConfig({
  hash: true,
  routes,
  // NOTE(william): use proxy for dev and preview commands
  proxy: {
    '/api': {
      target: process.env.GAREN_API,
    },
  },
  outputPath: path.resolve('../../output/build/dist'),
});
