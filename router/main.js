var express = require('express')
var Articles = require('../data')
var route = express.Router()
var mysql = require('mysql')

var conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'1234',
    database:'modu'
})


conn.connect()
route.get('/', function(req, res){
    conn.query('SELECT * FROM  list;', function (error, result) {
        if (error) throw error;
        for (i=0;i<result.length;i++){
            console.log(result[i].title);
        }
        return res.render('index.html',{name:"태경" , articles:result})
      })
    // conn.end()
    // data = Articles()
    // return res.render('index.html',{name:"태경" , articles:data})
})

route.get("/data",function(req, res){
    return res.send("데이터 보낸겁니다.")
})

route.get('/details/:id', function(req, res){
    
    console.log(req.params.id)
    id = parseInt(req.params.id)
    sql = 'SELECT * FROM list WHERE id=' +id
    
    conn.query(sql , function(err , result){
        console.log(result)
        return res.render('details.html' ,{data: result[0]} )
    })

    // data = Articles()
    // console.log(data[id-1])
    // article = data[id-1]
    // return res.send("SUCCESS")
    // return res.render('details.html' ,{data: article} )
})

module.exports = route


