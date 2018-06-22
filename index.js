var express=require('express');
var bodyParser=require('body-parser');
var port=process.env.PORT||8080;
var app=express();
var route=require('./route');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/',route);

app.listen(port,(req,res)=>{
    console.log(`App is running at ${port}`);
});