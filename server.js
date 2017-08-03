var express = require('express');
var app = express();
const mongoose = require('mongoose');
const parser = require('body-parser');
const Constactlist = require("./models/contaclist")


app.use(express.static(__dirname + "/public"));

console.log(__dirname+"/public");


var mongoDB = 'mongodb://phungquocvuong:01664541118King@ds163672.mlab.com:63672/local_library';
var db = mongoose.connect(mongoDB,{useMongoClient: true});
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('open', ()=>{
    console.log('connection');
});

app.get('/contactlist', (req,res) => {
    console.log("I receive a get request");
    // person1 ={
    //     name : 'tim',
    //     email : 'tim@gmail.com',
    //     number : '111 111-111'
    // }

    // person2 ={
    //     name : 'Jason',
    //     email : 'Jason@gmail.com',
    //     number : '111 222-222'
    // }

    // person3 ={
    //     name : 'Micle',
    //     email : 'micle@gmail.com',
    //     number : '111 222-222'
    // }

    //var contactlist = [person1,person2,person3];
    Constactlist.find({},(err,data)=>{
        if(err) throw err;
        console.log(data);
    });
    //console.log('contactlist',abc);

    res.send('abc');
});

app.post('/contactlist', (req,res)=>{
    console.log(req.body);
});

app.listen(3000,()=> console.log('server is running...'));