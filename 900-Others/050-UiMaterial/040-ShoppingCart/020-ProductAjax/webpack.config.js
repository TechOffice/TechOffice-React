const path = require('path');

module.exports = {
	entry: './src/App.tsx',
	output: {
		path: path.resolve(__dirname, 'bin'),
		filename: 'app.bundle.js',
		publicPath: '/bin'
	},
	devtool: "eval-source-map",
	devServer: {
		contentBase: "./bin"
	},
	module: {
		rules: [
			{
				test: /\.tsx$/,
				use:{
					loader: 'babel-loader'
				},
				exclude: [
					/node_modules/
				]
			}
		]
	},
	resolve: {
		extensions: ['.jsx', '.js', '.tsx', 'ts'], 
		modules: [ path.resolve(__dirname, 'src'), 'node_modules' ] 
	}
}; 