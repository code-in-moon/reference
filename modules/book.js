var mongoose = require("mongoose");

//book schema
var bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  author: {
    type: String,
    required: true,
  },
  publisher: {
    type: String,
  },
  pages: {
    type: String,
  },
  image_url: {
    type: String,
  },
  buy_url: {
    type: String,
  },
  create_date: {
    type: Date,
    default: Date.now,
  },
});

//var Book = (module.exports = mongoose.model("Book", bookSchema)); // there is a better way
var Book = mongoose.model("Book", bookSchema); // create a collection of db

//Get Books
// module.exports.getBooks = (callback, limit) => {  // there is a better way
//   Book.find(callback).limit(limit);
// };

//Get Books
Book.getBooks = (callback, limit) => {
  // there is a better way
  Book.find(callback).limit(limit);
};

//Get Book
Book.getBookById = (id, callback) => {
  Book.findById(id, callback);
};

//add book
Book.addBook = (book_object, callback) => {
  Book.create(book_object, callback);
};

//update
Book.updateBook = (id, book, options, callback) => {
  const query = { _id: id };
  let update = {};
  //in below if we dont have all parameter we get null
  // const update = {
  //   title: book.title,
  //   genre: book.genre,
  //   description: book.description,
  //   author: book.author,
  //   publisher: book.publisher,
  //   pages: book.pages,
  //   image_url: book.image_url,
  //   buy_url: book.buy_url,
  // };

  //in this method we dont get null
  if (book.title) {
    update.title = book.title;
  }
  if (book.genre) {
    update.genre = book.genre;
  }
  if (book.description) {
    update.description = book.description;
  }
  if (book.author) {
    update.author = book.author;
  }
  if (book.publisher) {
    update.publisher = book.publisher;
  }
  if (book.pages) {
    update.pages = book.pages;
  }
  if (book.image_url) {
    update.image_url = book.image_url;
  }
  if (book.buy_url) {
    update.buy_url = book.buy_url;
  }

  Book.findOneAndUpdate(query, update, options, callback);
};

//delete
Book.removeBook = (id, callback) => {
  const query = { _id: id };
  Book.remove(query, callback);
};

module.exports = Book;
