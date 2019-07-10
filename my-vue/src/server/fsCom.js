//node的内置方法 fs;
let fs = require('fs');
let path = require('path');
let dirname = path.resolve();
['mkdir','rmdir','readdir','readFile','copyFile','unlink'].forEach(item=>{
    exports[item] = function(pathname,copypath = ''){
        pathname = path.resolve(dirname,pathname);
        copypath = path.resolve(dirname,copypath);
        return new Promise((resolve,reject) => {
            let agms = [(err,result)=>{
                if(err){
                    reject(err);
                    return;
                }
                resolve(result || '');
            }];
            item === 'readFile' ? agms.unshift('utf8') : null;
            item === 'copyFile' ? agms.unshift(copypath) : null;
            fs[item](pathname,...agms);
        })
    }
});
['writeFile','appendFile'].forEach(item=>{
    exports[item] = function(pathname,content){
        pathname = path.resolve(dirname,pathname);
        if(typeof content !== 'string'){
            content  = JSON.stringify(content);
        }
        return new Promise((resolve,reject) => {
            fs[item](pathname,content,'utf8',(err,result)=>{
                if(err){
                    reject(err);
                    return;
                }
                resolve(result || '');
            });
        })
    }
});




/*  定义了两个方法 一个是Promise */
// let readFile = function(pathName){
//     pathName = path.resolve(path.resolve(),pathName);
//     return new Promise((resolve,reject)=>{
//         fs.readFile(pathName,'utf8',(err,result)=>{
//             if(err){
//                 reject(err);
//                 return;
//             }
//             resolve(result);
//         })
//     });
// }
// /* 这个是ES5的方法 */
// let readFile2 = function(pathName,sucFn,errFn){
//     pathName = path.resolve(path.resolve(),pathName);
//     fs.readFile(pathName,'utf8',function(err,result){
//         if(err){
//             errFn(err);
//             return;
//         }
//         sucFn(result);
//     }); 
// }
// module.exports = {
//     readFile,
//     readFile2,
// }

/*        fs.mkdir                 */
// fs.mkdir / fs.mkdirSync 创建文件夹 有Sync的是同步 
// fs.mkdirSync('./less'); //同步创建一个less文件夹
// fs.mkdir('./less',err=>{
//     if(err){ //err有值的时候证明现在失败了（有了这个文件就会失败）
//         console.log(err);
//         return false;
//     }
//     console.log(123);
// });
/*       fs.readdir                        */
// fs.readdir / fs.readdirSync  读取文件夹中文件(返回的结果是一个数组)
// console.log(fs.readdirSync('./'));  同步读取
// fs.readdir('./',(err,result) =>{ 异步读取
//     if(err){
//         console.log(err)
//         return false;
//     }
//     console.log(result)
// });

/*          fs.readFile      */
// fs.readFile('./less/less.js','utf8',(err,result)=>{
//     if(err){
//         console.log(err);
//         return false;
//     }
//     console.log(result);
// });
// fs.writeFile('./less/less.js','hehe','utf8',err => {
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('OK');
// });
// fs.appendFile('./less/less.js','ahahah','utf8',err => {
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('ok');
// })
// fs.unlink('./less/less.js',err=>{ //删除一个文件
//     if(err){ console.log(err);return false};
//     console.log('Ok');
// });
// path.resolve(); 当前模块中的方法在什么地方执行的那么对应的绝对路径是执行文件的路径
// __dirname 当前模块所在的绝对路径（可以理解为这个方法在哪里定义的，那么就拿到当前定义模块的绝对路径）