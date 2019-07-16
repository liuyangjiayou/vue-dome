module.exports = {
    publicPath: '/',
    devServer: {
        port : "8080",
        proxy: {
            '/api': {
                target: 'http://localhost:4000/api',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                  '^/api': ''
                }
            }
        }
    }
}