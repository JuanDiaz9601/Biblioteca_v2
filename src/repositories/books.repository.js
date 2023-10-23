const BooksSchema = require("../models/books.model");

const createBooks = async (title, sbn, author, genre) => {
  const newBook = BooksSchema({
    title,
    sbn,
    author,
    genre,
  });

  return await newBook;
};

module.exports = {
  createBooks,
};
