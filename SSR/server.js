const fs = require('fs')
const path = require('path');

const Vue = require('vue')
const Koa = require('koa')
const KoaRouter = require('koa-router')
const serve = require('koa-static');
const VueServerRenderer = require('vue-server-renderer');

const serverBundle = fs.readFileSync('./dist/server.bundle.js', 'utf-8')
const template = fs.readFileSync('./dist/index.ssr.html', 'utf-8')

const renderer = VueServerRenderer.createBundleRenderer(serverBundle, {
    template
})

// renderer.renderToStream

const app = new Koa();
const router = new KoaRouter();

router.get('(.*)', async ctx => { 
    let result = await renderer.renderToString()
    console.log('start!!=== ', result, 'result!!!')
    ctx.body = result;
})

// 将 client.bundle.js 作为静态资源提供
// koa 中的 koa-static 作用是将某个目录作为静态资源目录暴露
// 问题：为什么要通过静态资源的方式暴露？
app.use(serve(path.resolve(__dirname, 'dist')))

app.use(router.routes())

app.listen(8080, () => {
    console.log('服务器运行在8080端口')
})








