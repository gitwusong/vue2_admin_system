module.exports = {
    // lintOnSave: false, // 关闭eslint 校验
    devServer: {
        proxy: {
            '/ajax': {
                target: 'http://127.0.0.1/',
                ws: true,
                changeOrigin: true
            },
            '/login': {
                target: 'http://127.0.0.1/',
                ws: true,
                changeOrigin: true
            }
        }
    }
} 