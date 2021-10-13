var mysql = require('mysql')

const conn = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '1234',
    database : 'modu'
  });

conn.connect()



conn.query('SELECT * FROM  list;', function (error, result) {
    if (error) throw error;
    console.log('list info is: ', result);
  });