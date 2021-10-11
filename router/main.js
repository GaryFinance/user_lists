var express = require('express')

var route = express.Router()

route.get('/', function(req, res){
    return res.render('index.html',{name:"태경"})
})

route.get("/data",function(req, res){
    return res.send("데이터 보낸겁니다.")
})

module.exports = route


