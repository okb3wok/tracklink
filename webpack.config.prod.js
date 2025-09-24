import path from 'path';
import { fileURLToPath } from 'url';
import TerserPlugin from 'terser-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const common = {
  mode: 'production',
  entry: './src/index.js',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({ terserOptions: { format: { comments: false } }, extractComments: false })
    ]
  },
  devtool: false
};

// 1️⃣ ESM сборка
const esmConfig = {
  ...common,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'tracklink.js',
    library: { type: 'module' }
  },
  experiments: { outputModule: true }
};

// 2️⃣ UMD сборка
const umdConfig = {
  ...common,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'tracklink.umd.js',
    library: 'tracklink',
    libraryTarget: 'umd',
    globalObject: 'this',
    libraryExport: 'default'
  }
};

export default [esmConfig, umdConfig];
