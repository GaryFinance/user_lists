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

route.get('/delete/:id', function(req , res){
        id = req.params.id
        console.log(id)
        sql = 'DELETE FROM list WHERE (id ='+id+' )'
        conn.query(sql, function(err , result){
            res.redirect('/')
        })
        // res.send("Success")
})

route.get('/insert', function(req ,res){
    res.render('add_article.html')
})

route.post('/insert', function(req, res){
    
    title = req.body.title
    description = req.body.description
    author = req.body.author
    sql = `INSERT INTO list (title, description, author) VALUES ( '${title}','${description}' ,'${author}');`
    console.log(sql)
    conn.query(sql, function(error, result){
        if (error) {
            console.log(error)
        } else {
            res.redirect('/')
        }
       
    })
})

route.get('/edit/:id', function(req, res){
    id = parseInt(req.params.id)
    // sql = 'SELECT * FROM list WHERE id=' +id
    sql = `SELECT * FROM list WHERE id=${id}`
    conn.query(sql , function(err , result){
        console.log(result)
        return res.render('edit_article.html' ,{data: result[0]} )
    })
})

route.post('/edit/:id', function(req, res){
    id = parseInt(req.params.id)
    title = req.body.title
    description = req.body.description
    author = req.body.author
    sql=`UPDATE list SET title = '${title}', description = '${description}'  , author='${author}' WHERE (id = '${id}');`

    conn.query(sql, function(err, result){
        if (err) {
            console.error(err)
        } else {
            res.redirect('/')
        }
    })
})
// DELETE FROM `modu`.`list` WHERE (`id` = '1');
module.exports = route


