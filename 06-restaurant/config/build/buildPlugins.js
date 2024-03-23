import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";
import webpack from "webpack";

const buildPlugins = ({paths}) => {
    return [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new CopyPlugin({
            patterns: [
                { from: 'public/manifest.json', to: "manifest.json" },
                { from: 'public/robots.txt', to: "robots.txt" }
            ]
        })
    ];
}

export default buildPlugins;
