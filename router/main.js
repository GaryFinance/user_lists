var express = require('express')
var Articles = require('../data')
var route = express.Router()

route.get('/', function(req, res){
    data = Articles()
    return res.render('index.html',{name:"태경" , articles:data})
})

route.get("/data",function(req, res){
    return res.send("데이터 보낸겁니다.")
})

route.get('/details/:id', function(req, res){
    
    console.log(req.params.id)
    // return res.send("SUCCESS")
    return res.render('details.html' ,{data:req.params.id} )
})

module.exports = route


