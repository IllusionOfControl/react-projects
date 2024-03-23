const buildDevServer = ({ paths }) => {
    return {
        historyApiFallback: true,
        static: {
            directory: paths.build,
        },
        port: 8080,
        open: true
    }
}

export default buildDevServer;
