var mongoose = require("mongoose");

//genre schema
var genreSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  create_date: {
    type: Date,
    default: Date.now,
  },
});

//var Genre = (module.exports = mongoose.model("Genre", genreSchema));
var Genre = mongoose.model("Genre", genreSchema);

//Get Genres
Genre.getGenres = (callback, limit) => {
  Genre.find(callback).limit(limit);
};

//add genre
Genre.addGenre = (genra_object, callback) => {
  Genre.create(genra_object, callback);
};

//update
Genre.updateGenre = (id, genre, options, callback) => {
  const query = { _id: id };
  // const update = {
  //   name: genre.name,
  // };
  const update = {};
  if (genre.name) {
    update.name = genre.name;
  }
  Genre.findOneAndUpdate(query, update, options, callback);
};

//delete
Genre.removeGenre = (id, callback) => {
  const query = { _id: id };

  Genre.remove(query, callback);
};

module.exports = Genre;
