var express=require('express');
var mongoose=require('mongoose');
var Schema=mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/crudapi');

var userSchema=new Schema({
    first_name:String,
    last_name:String,
    email:String
});

module.exports=mongoose.model('User',userSchema);
