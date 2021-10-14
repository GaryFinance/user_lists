var mysql = require('mysql')

const conn = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '1234',
    database : 'modu'
  });

conn.connect()



// conn.query('SELECT * FROM  list;', function (error, result) {
//     if (error) throw error;
//     console.log('list info is: ', result);
//   });

  
sql = "INSERT INTO list (title, description, author) VALUES ('제목', '내용을 적는 부분이다.', '작가');"
conn.query(sql ,function(err , result){
  if (err) throw err;
  console.log(result)
})

conn.end()
