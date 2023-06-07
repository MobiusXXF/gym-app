const express = require('express');
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
user: 'root',
host: 'localhost',
password: 'password',
database: 'gymClasses'
});


app.get('/create'), (req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const time = req.body.time;
    const avgattend = req.body.avgattend;
    

    db.query(
        'SELECT class FROM gymClasses (name, description, time, avgattend) VALUES (?,?,?,?,?)', 
        [name, description, time, avgattend],(err, res) => {
            if (err) {
            console.log(err);
            } else {
                res.send("Request Successful");
            }
        }
    );
};


app.listen(3001, () => {
console.log("Yay, your server is running on port 3001");
});
