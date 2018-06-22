var express=require('express');
var mongoose=require('mongoose');
var router=express.Router();
var User=require('./user');

router.get('/',(req,res)=>{
    var user={
        first_name:"Kick",
        last_name:"Buttowski",
        email:"kick@abc.com"
    };
    var newUser=User(user);
    newUser.save(function(err){
        if(err){
            console.log(err);
        }
        else{
            console.log("User added succesfully");
        }
    })
});

module.exports=router;