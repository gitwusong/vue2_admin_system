module.exports = {
    // lintOnSave: false, // 关闭eslint 校验
    devServer: {
        proxy: {
            '/ajax': {
            target: 'http://192.168.1.132/',
            ws: true,
            changeOrigin: true
            },
        }
    }
}