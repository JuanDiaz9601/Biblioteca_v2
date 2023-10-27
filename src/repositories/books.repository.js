const Books = require("../models/books.model");

const create = async ({ title, sbn, author, genre }) => {
  const newBook = Books({
    title,
    sbn,
    author,
    genre,
  });

  return await newBook.save();
};

const getAll = async () => {
  return await Books.find();
};

const getOne = async (id) => {
  return await Books.findById(id);
};

module.exports = {
  create,
  getAll,
  getOne,
};
