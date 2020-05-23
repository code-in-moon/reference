const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Genre = require("../modules/genre");
const Book = require("../modules/book");

//body parser
//app.use(express.json());
//app.use(express.urlencoded({ extended: false }));

mongoose.connect("mongodb://localhost/bookstore");
var db = mongoose.connection;

router.get("/", (req, res) => {
  res.send("hello world");
});

//get genres
router.get("/genres", (req, res) => {
  Genre.getGenres((err, genres_list) => {
    if (err) {
      throw err;
      //res.status(500).send();
    }
    res.json(genres_list);
  });
});

//get books
router.get("/books", (req, res) => {
  Book.getBooks((err, books_list) => {
    if (err) {
      throw err;
    }
    res.json(books_list);
  });
});

//get books
router.get("/books/:_id", (req, res) => {
  Book.getBookById(req.params._id, (err, book) => {
    if (err) {
      throw err;
    }
    res.json(book);
  });
});

//add a genra
router.post("/genres", (req, res) => {
  genre_object = req.body;
  Genre.addGenre(genre_object, (err, genre_object) => {
    if (err) {
      throw err;
    }
    res.json(genre_object);
  });
});

//add a book
router.post("/books", (req, res) => {
  book_object = req.body;
  Book.addBook(book_object, (err, book_object) => {
    if (err) {
      throw err;
    }
    res.json(book_object);
  });
});

//update genre
router.put("/genres/:_id", (req, res) => {
  const _id = req.params._id;
  const genre = req.body;
  Genre.updateGenre(_id, genre, {}, (err, genre) => {
    if (err) {
      throw err;
    }
    res.json(genre);
  });
});

//update book
router.put("/books/:_id", (req, res) => {
  const _id = req.params._id;
  const book = req.body;
  Book.updateBook(_id, book, {}, (err, book) => {
    if (err) {
      throw err;
    }
    res.json(book);
  });
});

//delete genre
router.delete("/genres/:_id", (req, res) => {
  const _id = req.params._id;
  Genre.removeGenre(_id, (err, genre) => {
    if (err) {
      throw err;
    }
    res.json(genre);
  });
});

//delete book
router.delete("/books/:_id", (req, res) => {
  const _id = req.params._id;
  Book.removeBook(_id, (err, book) => {
    if (err) {
      throw err;
    }
    res.json(book);
  });
});
// //get single member
// router.get("/:id", (req, res) => {
//   const found = members.some(
//     (members) => members.id === parseInt(req.params.id)
//   );
//   if (found) {
//     res.json(
//       members.filter((members) => members.id === parseInt(req.params.id))
//     );
//   } else {
//     res.status(400).json({ msg: `no member wih the id of ${req.params.id}` });
//   }
// });

module.exports = router;
