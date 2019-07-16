var express = require('express');
var app = express();
// app.get(/.*/, function(req, res){
//   res.sendFile('./dist/index.html');
// });
// app.all('*', function (req, res, next) {

//     res.header('Access-Control-Allow-Origin', 'http://test.test.com:8080');
  
//     res.header('Access-Control-Allow-Credentials', true);
  
//     res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With')
  
//     res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  
//     res.header('Content-Type', 'application/json;charset=utf-8');
  
//     next()
  
//   });
// app.get('/api/uploader', function(req, res){
//     res.send({
//         name :'11'
//     });
// });
app.post('/api/uploader', function(req, res){
    res.send({
        name :'11'
    });
});

app.listen(4000,function(){
    console.log('服务启动成功111');
});