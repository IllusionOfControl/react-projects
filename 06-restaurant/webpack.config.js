import path from 'path';
import { fileURLToPath } from 'url';
import buildWebpackConfig from './config/build/buildWebpackConfig.js';


export default (env) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const mode = env.mode || "development";
    const port = env.port || 8080;
    const isDev = mode === "development";

    return buildWebpackConfig({
        mode,
        port,
        isDev,
        paths: {
            entry: path.resolve(__dirname, 'src', 'index.jsx'),
            build: path.resolve(__dirname, 'dist'),
            html: path.resolve(__dirname, 'public', 'index.html')
        },
    });
};