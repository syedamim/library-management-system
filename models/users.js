let mongoose =  require('mongoose')
let Schema = mongoose.Schema
let bookSchema = require('./books');

let userSchema = new Schema(
    {
        userName : {
            type : String,
            required : true
        },
        phoneNumber : {
            type : String,
            required : true
        },
        emailID : {
            type : String,
            required : true
        },
        ISBN : {
            type : String,
            required : true
        },
        issuedBooks : [bookSchema]
    }
)

module.exports = mongoose.model('books', bookSchema);