
var path = require("path");
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');
//var SplitByPathPlugin = require('webpack-split-by-path');
let staticPath = `/Mywork/my-profile/myprofile_app/backend/static/dist/`;

const paths = {
  STATIC: path.resolve(__dirname, 'backend/static/frontend/'),
  SRC: path.resolve(__dirname, 'frontend/src'), // source folder path -> ADDED IN THIS STEP
  JS: path.resolve(__dirname, 'frontend/'),
  NODE_MODULES: path.resolve(__dirname, 'node_modules'),
  
};

// Webpack configuration
module.exports = {
    entry: path.join(paths.JS, 'src/index.tsx'),
    
    output: {
        path: paths.STATIC,
        filename: 'app.bundle.js',
    },
    // Dev server configuration -> ADDED IN THIS STEP
    // Now it uses our "src" folder as a starting point
    devServer: {
        contentBase: paths.SRC,
        hot : true,
    },

    context: __dirname,
    node: {
        __dirname: true
    },

    plugins: [
        new BundleTracker({filename: './webpack-stats.json'}),
    
        /*
        new SplitByPathPlugin([
        {
            name: 'vendor',
            path: path.join(__dirname, './node_modules/')
        }
        ])*/
    ],

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            {test: /\.tsx?$/, loader: "ts-loader"},

            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', "@babel/react"],
                        "plugins": [
                            [ "@babel/plugin-proposal-class-properties"]
                        ]
                    }
                }
            },

            {test: /\.txt$/i, use: 'raw-loader',},
 
            {test: /\.svg$/, loader: 'svg-inline-loader'},

            { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]},
            { test: /\.json$/, loader: "json-loader" },
            { test: /\.(png|jp(e*)g|jpg|woff|woff2|eot|ttf|svg)$/, 
              loader: 'url-loader?limit=1000000' },
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            }
        ],
    },

    resolve: {
  
        alias:{
            containers : path.resolve(paths.JS, 'src/containers/'),
            templates  : path.resolve(paths.JS, 'src/templates/'),
            components : path.resolve(paths.JS, 'src/components/'),
            css        : path.resolve(paths.JS, 'src/css/'),
            types      : path.resolve(paths.JS, 'src/types/'),
            actions    : path.resolve(paths.JS, 'src/actions/'),
            dispatch   : path.resolve(paths.JS, 'src/dispatch/'),
            reducers   : path.resolve(paths.JS, 'src/reducers/'),
            containers : path.resolve(paths.JS, 'src/containers/'),
            apis       : path.resolve(paths.JS, 'src/apis/'),
            media      : path.resolve(paths.JS, 'src/media/'),
            helpers    : path.resolve(paths.JS, 'src/helpers/'),
            utils      : path.resolve(paths.JS, 'src/utils/'),
            store      : path.resolve(paths.JS, 'src/store/'),
            App        : path.resolve(paths.JS, 'src/App.tsx'),
            tests      : path.resolve(paths.JS, 'src/tests/'),
            serviceWorker : path.resolve(paths.JS, 'src/serviceWorker.tsx'),
        },

        extensions: ['*', '.ts', '.tsx', '.js', '.jsx']
    },

    /*
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },*/

};