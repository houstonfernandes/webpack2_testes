var webpack = require('webpack');
module.exports = {
    entry: {
        vendor:['jquery','bootstrap'],
        app:   './assets/js/index.js',
        novo:  './assets/js/novo.js',
        novo2: './assets/js/novo2.js',
        novo3: ['./assets/js/novo3_es6.js','./assets/js/novo3.js']
    },
    output: {
        filename: '[name].[chunkhash].bundle.js',
        path:'./dist/'
    },
    plugins:[
	new webpack.optimize.CommonsChunkPlugin(
		{name:'vendor'}
	),
        new webpack.ProvidePlugin({
            $:'jquery',
            jQuery: 'jquery'
        }),/*
	new webpack.optimize.UglifyJsPlugin({//compactar
	    sourceMap:true
	}),
	new webpack.LoaderOptionsPlugin({//compactar
            minimize:true
        })*/
    ],
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude: /node_modules/,
                query:{
                    presets:['es2015']
                }
            },
    		{
    			test:/\.less$/,
    			loaders:['style-loader', 'css-loader', 'less-loader']
    		},

    		{
    			test:/\.(woff|woff2|ttf|svg|eot)$/,//arquivos do bootstrap
    			loader:'url-loader'
    		}
        ]

    }
}
