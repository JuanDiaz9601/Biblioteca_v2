const  { Schema, model } = require('mongoose');


const BooksSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, required: true, auto: true },
    title: { type: Schema.Types.String, required: true },
    sbn: { type: Schema.Types.String, required: true },
    author: { type: Schema.Types.String, required: true },
    genre: { type: Schema.Types.String, required: true },
});

module.exports = model('Books', BooksSchema);