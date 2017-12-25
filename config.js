const appRoot = process.cwd();
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSCSS = new ExtractTextPlugin({
    filename: "styles/[name]-[contenthash:base62:8]-scss.css"
});

module.exports = {
    bail: true,
    entry: ["./index.js"],
    context: appRoot,
    resolve: {
        modules: [path.resolve(appRoot, "./node_modules")],
        extensions: [".js"],
        symlinks: false
    },
    output: {
        path: path.join(appRoot, "./bundle"),
        publicPath: "",
        filename: "scripts/[name]-[chunkhash].js",
    },
    plugins: [
        extractSCSS
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                loader: extractSCSS.extract({
                    use: [
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true,
                                precision: 10
                            }
                        }
                    ]
                })
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: [{
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: false
                    }
                },]
            }
        ]
    }
};
