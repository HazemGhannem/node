const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const Contact = new Schema({
    name: { type: String},
    phone: { type: String},

})

module.exports= mongoose.model('Contacts',Contact)