// let http = require('http');
// let url = require('url');



// let server = http.createServer(); //创建服务

// server.listen(); //监听端口


//  第一个参数是要解析的路径  第二个参数是一个boolean值 true是把？后面的参数变为对象键值对的方式
// console.log(url.parse('http://www.javascriptpeixun.cn/course/457/task/17704/show.html?form=qq&lx=stu#video',true));
/* Url {
    protocol: 'http:',
    slashes: true,
    auth: null,
    host: 'www.javascriptpeixun.cn',
    port: null,
    hostname: 'www.javascriptpeixun.cn',
    hash: '#video',
    search: '?form=qq&lx=stu',
    query: 'form=qq&lx=stu',
    pathname: '/course/457/task/17704/show.html',
    path: '/course/457/task/17704/show.html?form=qq&lx=stu',
    href: 'http://www.javascriptpeixun.cn/course/457/task/17704/show.html?form=qq&lx=stu#video' } */
 /*    Url {
        protocol: 'http:',
        slashes: true,
        auth: null,
        host: 'www.javascriptpeixun.cn',
        port: null,
        hostname: 'www.javascriptpeixun.cn',
        hash: '#video',
        search: '?form=qq&lx=stu',
        query: { form: 'qq', lx: 'stu' },
        pathname: '/course/457/task/17704/show.html',
        path: '/course/457/task/17704/show.html?form=qq&lx=stu',
        href: 'http://www.javascriptpeixun.cn/course/457/task/17704/show.html?form=qq&lx=stu#video' } */