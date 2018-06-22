var express=require('express');
var mongoose=require('mongoose');
var router=express.Router();
var User=require('./user');

router.get('/',(req,res)=>{
    res.send("Hello world");
});

module.exports=router;