const buildDevServer = ({ port, paths, isDev }) => {
  return {
    historyApiFallback: true,
    static: {
      directory: paths.build,
    },
    port: port,
    open: !isDev,
    compress: !isDev,
    liveReload: isDev,
  }
}

export default buildDevServer;
