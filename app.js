var express = require("express")

var app = express()


app.get('', function(req, res){
    res.send("Hello World!!")
})

app.get("/data",function(req, res){
    res.send("데이터 보낸겁니다.")
})

app.listen(8080, function(){
    console.log("Server is runing!")
})