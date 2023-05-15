var express = require('express');
var router = express.Router();
const sqlite = require('sqlite3').verbose();
db = new sqlite.Database("./db.sqlite", sqlite.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the database.');
});

/* GET home page. */
router.get('/', function(req, res, next) {
    sql= "SELECT * FROM quote";
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.send(rows);
    });
});

router.post('/', (req, res) => {
    const {date, product_name, product_weight, price}=req.body;
    sql = "INSERT INTO quote (date, product_name, product_weight, price) VALUES (?, ?, ?, ?)";
    db.run(sql, [date, product_name, product_weight, price], (err) => {
        if (err) {
            console.error(err.message);
            return res.status(500).send(err.message);
        }
        console.log('inserted');
    });
    res.redirect('/data.html');
    //return res.status(200).send('inserted');
})

module.exports = router;
