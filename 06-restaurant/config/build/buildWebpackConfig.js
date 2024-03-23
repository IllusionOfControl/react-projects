import buildResolvers from "./buildResolvers.js";
import buildDevServer from "./buildDevServer.js";
import buildModules from "./buildModules.js";
import buildPlugins from "./buildPlugins.js";

const buildWebpackConfig = (config) => {
    const { mode, entry, paths } = config
    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: '[name]_[contenthash].js',
            path: paths.build,
            assetModuleFilename: 'assets/[hash][ext][query]',
            clean: true,
        },
        resolve: buildResolvers(config),
        devServer: buildDevServer(config),
        module: buildModules(config),
        plugins: buildPlugins(config),
    }
}

export default buildWebpackConfig;
