import path from 'path';
import { fileURLToPath } from 'url';
import buildWebpackConfig from './config/build/buildWebpackConfig.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
    mode: "development",
    paths: {
        entry: path.resolve(__dirname, 'src', 'index.jsx'),
        build: path.resolve(__dirname, 'dist'),
        html: path.resolve(__dirname, 'public', 'index.html')
    },
}

const webpackConfig = buildWebpackConfig(config);

export default webpackConfig;