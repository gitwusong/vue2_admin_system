/*
 * @Author: your name
 * @Date: 2020-12-02 11:24:54
 * @LastEditTime: 2021-01-07 10:41:59
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \robotc:\Users\hechuan\Desktop\新建文件夹\vue2_admin_system\vue.config.js
 */
module.exports = {
    // lintOnSave: false, // 关闭eslint 校验
    publicPath: process.env.NODE_ENV === 'production'
    ? '/demo/'
    : '/',
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