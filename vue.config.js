module.exports = {
    devServer:{
        port:5000
    },
    pages: {
        s1: {
            entry: 'src/modules/s1/main.js',
            template: 'public/index.html',
            filename: 'index.html',
            chunks: ['chunk-vendors', 'chunk-common', 's1']
        },
        s2: 'src/modules/s2/main.js'
    }
}

