module.exports={
    entry:__dirname+'/main.js',
    output:{
        path:__dirname+"/public",
        filename:"bundle.js"
    },
    resolve:{
        alias:{
           'vue$': 'vue/dist/vue.common.js'
        }
    },
    module:{
        loaders:[{
                test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"

        }, {
            //cnpm install html-loader
            test: /\.html$/,
            loader: "html-loader"
        }, {
            //cnpm install vue-loader vue-template-compiler
            test: /\.vue$/,
            loader: "vue-loader"
        }, {
            //cnpm install css-loader style-loader
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }, {
            //cnpm install sass-loader node-sass
            test: /\.scss$/,
            loader: "sass-loader"
        },{
            //cnpm install less-loader less
            test: /\.(jpg|png|gif|jpeg)$/,
            loader: "url-loader"
        },{
            //cnpm install file-loader
            test: /\.(ttf|svg|woff|eot)$/,
            loader: "file-loader"
        }]
    },
    devServer: {
        //服务器文件夹
        contentBase: "./public",
        //port
        //实时更新
        inline: true
    },
}