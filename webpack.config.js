const path = require ('path');

const minicssextractplugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: [
                    minicssextractplugin.loader,
                    'css-loader'
                ]
            }
        ]
    },
    plugins:[
        new minicssextractplugin({
            filename: 'style.css'
        })
    ]

    //ordem importa no array
    //path vai resover para o diretorio atual +  convenção de nome de pasta
}