const { request = req, response = res } = require("express");
const { createBooks } = require("../repositories/books.repository");

const createBook = async (req, res) => {
  const { title, sbn, author, genre } = req.body;

  const newBook = createBooks({
    title,
    sbn,
    author,
    genre,
  });

  res.json(newBook);
};

module.exports = {
  createBook,
};
