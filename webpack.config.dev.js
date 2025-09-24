import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'tracklink.umd.js',
    library: 'tracklink',
    libraryTarget: 'umd',
    globalObject: 'this',
    libraryExport: 'default'
  },
  devtool: 'inline-source-map',   // обязательно для отладки
  devServer: {
    static:{
      directory: path.join(__dirname, 'src'),
    },
    port: 8009,
    host: 'localhost',
    hot: true,
    open: true,
    compress: true,
    liveReload: true,
    historyApiFallback: true
  }
};
