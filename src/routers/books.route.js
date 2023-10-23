const { Router } = require("express");
const { createBook } = require("../controllers/books.controller");

const router = Router();

router.post("/books", createBook);
