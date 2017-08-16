const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const webpackConfig = require('../webpack.config.js')
const app = express();
const path = require('path');



const webpackCompiler = webpack(webpackConfig);

app.use(
  webpackDevMiddleware(
    webpackCompiler,
    {
      // publicPath is required, whereas all other options are optional
      //noInfo: false,
      //// display no info to console (only warnings and errors)
      //quiet: false,
      //// display nothing to the console
      //lazy: true,
      //// switch into lazy mode
      //// that means no watching, but recompilation on every request
      //watchOptions: {
      //	aggregateTimeout: 300,
      //	poll: true
      //},
      //// watch options (only lazy: false)
      publicPath: "/hmr/",
      // public path to bind the middleware to
      //// use the same as in webpack
      //index: "index.html",
      //// The index path for web server, defaults to "index.html".
      //// If falsy (but not undefined), the server will not respond to requests to the root URL.
      //headers: { "X-Custom-Header": "yes" },
      //// custom headers
      //mimeTypes: { "text/html": [ "phtml" ] },
      //// Add custom mime/extension mappings
      //// https://github.com/broofa/node-mime#mimedefine
      //// https://github.com/webpack/webpack-dev-middleware/pull/150
      //stats: {
      //	colors: true
      //},
      //// options for formating the statistics
      //reporter: null,
      //// Provide a custom reporter to change the way how logs are shown.
      //serverSideRender: false,
      //// Turn off the server-side rendering mode. See Server-Side Rendering part for more info.
    }
  )
);

app.use(webpackHotMiddleware(webpackCompiler));


app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../dist/index.html'));
});


const port = 3001;
app.listen(port, () => {
  console.log(`Example app listening on port ${3001}`);
})
