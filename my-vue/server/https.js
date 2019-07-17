var path = require("path");
var fs = require("fs");
var express =require("express");
var app=express();
var bodyParser = require('body-parser');
var formidable = require('formidable');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
app.get('/api',function(req,res){
    res.send({
        name : '1'
    })
})


//拦截请求
app.post("/api/uploader",function (req,res) {
    var form = new formidable.IncomingForm();
    form.encoding = 'utf-8';
    form.uploadDir = path.join(__dirname + "/../uploader");
    form.keepExtensions = true;//保留后缀
    form.maxFieldsSize = 2 * 1024 * 1024;
    //处理图片
    form.parse(req, function (err, fields, files){
        var filename = files.aaa.name
        var nameArray = filename.split('.');
        var type = files.aaa.type.split('/')[1];
        console.log(type);
        var name = '';
        for (var i = 0; i < nameArray.length - 1; i++) {
            name = name + nameArray[i];
        }
        var date = new Date();
        var time = '_' + date.getFullYear() + "_" + date.getMonth() + "_" + date.getDay() + "_" + date.getHours() + "_" + date.getMinutes();
        var avatarName = name + time + '.' + type;
        var newPath = form.uploadDir + "/" + avatarName;
        fs.renameSync(files.aaa.path, newPath);  //重命名
        res.send({data:"/upload/"+avatarName})
    })
});
app.listen("4000",function () {
    console.log("服务启动111")
});
