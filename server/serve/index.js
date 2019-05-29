const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./db_con/db');
const app = express();
// app.use(cors());
app.use(bodyParser.json());


app.use(bodyParser.urlencoded({extended : true}));

app.post('/api', (req, res) => {
    
    console.log('Api is working');
    console.log(req.body);

    let sum = JSON.parse(req.body.num1 )+ JSON.parse(req.body.num2);
    // let sum = JSON.parse(req.body.num1)
    console.log(sum);
    // let data = req.body;
    // res.send(r);
    res.send(sum.toString());

});

// app.post('/')


app.post('/getEvents', (req,res) => {

    connection.query("SELECT * FROM events" ,(err, rows, columns) => {

        if(err){
            console.log(err);
        }else{
            res.send(rows);
        }

    });


});

app.post('/addEvent', (req, res) => {

    console.log(req.body);

    let id = req.body.id;

    value = req.body;
    console.log(typeof(id));
    connection.query("INSERT INTO events VALUES(NULL, '"+req.body.eventName+"') ", (err, rows, columns) => {
        if(err){
            console.log(err);
        }else{

            console.log('hey inserted the rows');


        }
    });

    connection.query("SELECT * FROM events" ,(err, rows, columns) => {

        if(err){
            console.log(err);
        }else{
            res.send(rows);
        }

    });
    

});


app.post('/deleteEvent', (req, res) => {

    let id = parseInt(req.body.id);

    connection.query("DELETE from events WHERE (id='"+req.body.id+"')", (err, rows,colums) => {
        if(err){
            console.log(err);
        }else{
            res.send('done');
        }
    });
    // console.log(id);
});


app.listen(4000,() => {

    console.log("listening to the port 4000");

});

