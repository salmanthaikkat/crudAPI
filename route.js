var express=require('express');
var mongoose=require('mongoose');
var router=express.Router();
var User=require('./user');

router.get('/user',(req,res)=>{
    User.find(function(err,docs){
        if(err){
            res.json({success:false,message:"Retrieval failed"});
        }
        else{
            res.json(docs);
        }
    });
});

router.post('/user',(req,res)=>{
    var user={
        first_name:req.body.firstName,
        last_name:req.body.lastName,
        email:req.body.email
    }
    var newUser=User(user);
    newUser.save(function(err){
        if(err){
            res.json({message:"User insertion unsuccesfull",success:false});
        }
        else{
            res.json({message:"User Added Succesfully",success:true})
        }
    });
});

module.exports=router;