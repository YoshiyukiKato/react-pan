# react-pan
A template to develop react.js component by using webpack, babel, and karma. 

# usage
```shell
$ git clone git@github.com/YoshiyukiKato/react-pan
$ cd react-component-template && npm install
## install some components to use
$ $(npm bin)/webpack-dev-server 
```
Then the server runs on `http://localhost:8080`.

## develop your own app
`./src` is the directory to put source files of your app. Since those files will be loaded by webpack, you have to install appropriate `loader` and add configuration about the loader to `webpack.config.js`. An example case of `svg-inline-loader` is shown in below.

### install loader
```sh
$ npm install --save-dev svg-inline-loader
```
### add loader configuration
```js
//webpack.config.js
...
  module: {
    loaders: [
      { test: /\.jsx?$/, include: [path.resolve(__dirname, 'src/jsx')], loader: 'babel' },
      { test: /\.scss$/, loaders: ["style", "css", "sass"], include: [path.resolve(__dirname, 'src/sass')]},
      
      //ADD LOADER CONFIGURATION
      { test: /\.svg$/, loader: 'svg-inline', include: [path.resolve(__dirname, 'src/images')] }
    ],
  },
...
```

## build
By default, this template build your app by two different forms, `umd` and `web`. The `webpack` command generates components about these two types.
### umd
umd (Universal Module Definition) is a form of importable component. The component is built into `./dist`.
### web
A form of runnable component on web browser. The component is build into `./public`

# LICENSE
MIT
