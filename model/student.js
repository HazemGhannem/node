const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const student = new Schema({
    name:      { type: String},
    age:       { type: Number},
    classe:    { type: String},
    note:      { type: Number},

})

module.exports= mongoose.model('student',student)