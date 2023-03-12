const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const db = require("./db");

app.use(bodyParser.json());


app.pool.query(`CREATE TTABLE lists(
    id INTEGER AUTO_INCREMENT,
    value TEXT,
    PRIMARY KEY(id)
)`, (err, results, fields) => {
    console.log('results', results);
})

app.get('/api/values', function( req, res){
    db.pool.query('SELECT * FROM lists;', (err, results, fields) => {
        if(err)
            return res.status(500).send(err);
        else
            return res.json(results);
    })
})

app.post('/api/value', function(req, res, next){
    db.pool.query(`INSERT INTO lists (values) VALUES ("${req.body.value}")`
    ,(err,results, fileds) => {
        if(err)
            return res.status(500).send(err);
        else
            res.json({ success: true, value: req.body.value });
            
    });
})


app.listen(5000, () => {
    console.log('start!!!!!');
});

