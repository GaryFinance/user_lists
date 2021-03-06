var express = require("express")
var path = require('path')
var apiRouter = require('./router/main')
var app = express()
var bodyParser = require('body-parser')
app.set('views',path.resolve(__dirname ,'views'))
// console.log(path.resolve(__dirname ,'views'))
app.set('view engine', 'ejs')

app.engine('html', require('ejs').renderFile)

// 미들웨어 등록
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use('/',apiRouter)


app.listen(8080, function(){
    console.log("Server is runing!")
})