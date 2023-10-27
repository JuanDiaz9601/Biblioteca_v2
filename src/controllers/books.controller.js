const { request = req, response = res } = require("express");
const { create, getAll, getOne } = require("../repositories/books.repository");

const createBook = async (req, res) => {
  const { title, sbn, author, genre } = req.body;

  const newBook = await create({
    title,
    sbn,
    author,
    genre,
  });

  res.json(newBook);
};

const getAllBooks = async (req, res) => {
  const books = await getAll();

  res.json(books);
};

const getOneBook = async (req, res) => {
  const { id } = req.params;

  const book = await getOne(id);
  res.json(book);
};

module.exports = {
  createBook,
  getAllBooks,
  getOneBook,
};
