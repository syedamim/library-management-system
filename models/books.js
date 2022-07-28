let mongoose =  require('mongoose')
let Schema = mongoose.Schema

let bookSchema = new Schema(
    {
        bookName : {
            type : String,
            required : true
        },
        authorName : {
            type : String,
            required : true
        },
        ISBN : {
            type : String,
            required : true
        },
        issued : {
            type : Boolean,
            required : true
        },
        issuedToUser : {
            type : String,
        }
    }
)

module.exports = mongoose.model('books', bookSchema);