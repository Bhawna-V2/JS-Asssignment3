
const path = require('path');
module.exports = {
    entry: "./src/index.ts",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname,'dist'),   // Root dir remove from tsconfig
        publicPath: 'dist'
    },
    devtool: 'inline-source-map',
    resolve: {extensions:['.ts','.js']},
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/,
            }
        ]
    }
};