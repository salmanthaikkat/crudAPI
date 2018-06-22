var express=require('express');
var bodyParser=require('body-parser');
var port=process.env.PORT||8080;
var app=express();

app.listen(port,(req,res)=>{
    console.log(`App is running at ${port}`);
});