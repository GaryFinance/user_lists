var express = require("express")
var path = require('path')
var app = express()

app.set('views',path.resolve(__dirname ,'views'))
// console.log(path.resolve(__dirname ,'views'))
app.set('view engine', 'ejs')

app.engine('html', require('ejs').renderFile)

app.get('/', function(req, res){
    return res.render('index.html',{name:"태경"})
})


app.get("/data",function(req, res){
    return res.send("데이터 보낸겁니다.")
})

app.listen(8080, function(){
    console.log("Server is runing!")
})