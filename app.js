const express = require('express');
const logger = require('morgan');
const creacteError= require('http-errors');
const mongoose= require('mongoose')
const dbConfig = require('./mongodb.json')

const contact = require('./router/Contacts.js')
const app= express();


mongoose.connect(dbConfig.mongo.url);

app.use(logger('dev'));
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/contact',contact)

app.use((req,res,next)=>{
    next(creacteError(404));
})




module.exports = app ;