import path from "path";
import webpack from "webpack";
import WriteFilePlugin from "write-file-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import WebpackMd5Hash from "webpack-md5-hash";
import ExtractTextPlugin from "extract-text-webpack-plugin";

export default {
    mode: "production",
    devtool: false,
    entry: [
        /*main:*/ path.resolve(__dirname, "src/index")
        // vendor: path.resolve(__dirname, "src/vendor") TODO: splitting chunks
    ],
    target: "web",
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "/",
        filename: "[name].[chunkhash].js"
    },
    plugins: [
        // write files to dist folder
        new WriteFilePlugin(),
        // css to another file
        // new ExtractTextPlugin("[name].[chunkhash].css"), // TODO: extract css files
        // md5hash
        new WebpackMd5Hash(),
        // TODO: splitting chunks
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: "vendor"
        // }),
        // Create HTML file that includes reference to bundled JS
        new HtmlWebpackPlugin({
            template: "src/index.html",
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            }
        }),
        // minimizes the files
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ["babel-loader"]
            },
            {
                test: /\.css$/,
                loaders: ["style-loader", "css-loader"] // ExtractTextPlugin.extract("css?sourceMap") // TODO: extract css files
            }
        ]
    }
};
