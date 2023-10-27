const { Router } = require("express");
const booksControllers = require("../controllers/books.controller");

const booksRouter = Router();

booksRouter.post("/books", booksControllers.createBook);
booksRouter.get("/books", booksControllers.getAllBooks);
booksRouter.get("/books/:id", booksControllers.getOneBook);

module.exports = booksRouter;
