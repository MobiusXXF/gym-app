const express = require('express');
// var router = express.Router();
const mysql = require('mysql');
const app = express();

// MySQL Connection
const dbConn = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'p4ssw0rd',
    database: 'gymDB'
    });

dbConn.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// // GET request to fetch data
// router.get('/', function(req, res, next) {      
//     dbConn.query('SELECT name, description, time, avgattend FROM gymDB.classes',function(err,rows)     {
//         if(err) {
//             req.flash('error', err);
//             // render to views/users/index.ejs
//             res.render('users',{data:''});   
//         } else {
//             // render to views/users/index.ejs
//             res.render('users',{data:rows});
//         }
//     });
// });

// GET Request to fetch data
app.get('/', (req, res) => {
    const sql = 'SELECT * FROM gymDB.classes'; // Replace "table_name" with the actual table name
  
    connection.query(sql, (err, results) => {
      if (err) {
        console.error('Error executing MySQL query:', err);
        res.status(500).json({ error: 'Failed to fetch data from the database' });
        return;
      }
  
      res.json(results);
    });
  });


// Start the server
const port = 3000; // Change it to the desired port number
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});