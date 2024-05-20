/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
const fs = require('fs');
const webpack = require('webpack');

module.exports = {
    mode: 'production',
    entry: './src/Main.ts',
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    watchOptions: {
        ignored: ['node_modules']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, './builds/dist'),
        publicPath: '/',
        filename: 'wmw-game-emulator.js'
    },
    devServer: {
        historyApiFallback: {
            rewrites: [],
        },
        port: 9000
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: 'public' }
            ]
        }),
    ]
};