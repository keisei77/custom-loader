module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: [
          {
            loader: path.resolve('path/to/loader.js'),
            options: {}
          }
        ]
      }
    ]
  }
};
