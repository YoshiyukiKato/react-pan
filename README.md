[![Code Climate](https://codeclimate.com/github/YoshiyukiKato/react-pan/badges/gpa.svg)](https://codeclimate.com/github/YoshiyukiKato/react-pan)

# react-pan
A template to develop react.js component by using webpack, babel, and karma. 

# usage
## init
```shell
$ npm install react-pan -g
$ react-pan myapp
$ cd myapp && npm install
$ $(npm bin)/webpack-dev-server
```
Then webpack dev server runs on `http://localhost:8080`.

## develop your own app
### structure
```
myapp
├── dist
│   ├── umd
│   │   └── index.js
│   └── web
│       ├── index.html
│       └── index.js
├── index.js
├── karma.conf.js
├── package.json
├── src
│   ├── jsx
│   │   ├── app.jsx
│   │   ├── umd_index.jsx
│   │   └── web_index.jsx
│   └── sass
│       └── app.scss
├── tests
│   └── dist_spec.js
└── webpack.config.js
```
### src
`./src` is the directory to put source files of your app. Since those files will be loaded by webpack, you have to install appropriate `loader` and add configuration about the loader to `webpack.config.js`. An example case of `svg-inline-loader` is shown in below.

#### install loader
```sh
$ npm install --save-dev svg-inline-loader
```
#### add loader configuration
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
#### build sources
To build source files, run `webpack` command. By default, `react-pan` supposes two different forms of component, `umd` and `web`. The `umd` (Universal Module Definition) is a form of importable component. The `web` is a form of runnable component on web browser. 
```shell
$ $(npm bin)/webpack
```
### dist/umd
`./dist/umd` is the directory to put files complied as `umd` component by webpack from source files in `./src`.

### dist/web
`./dist/web` is the directory to put files to load webpack-dev-server. Those files are complied as web-runnable form by webpack from source files in `./src`.

### tests
`./tests` is the directory to put test code. All test runs on karma. The default test framework is mocha, assertion module is power-assert. `npm test` command runs all test files matching with `./tests/*_spec.js`.

# LICENSE
MIT
