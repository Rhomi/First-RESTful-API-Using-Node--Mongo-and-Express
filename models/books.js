var mongoose = require('mongoose');

// Genre Schema
// Schema isn't required for the database. It is required for the application.

var bookSchema = mongoose.Schema({
	title : {
		type: String,
		required: true
	},
	genre:{
		type: String,
		required: true
	},
	description:{
		type: String
	},
	author:{
		type: String,
		required: true
	}, 
	create_date:{    
		type: Date,
		default: Date.now
	}
});

var Book = module.exports = mongoose.model('Book', bookSchema);

// Get Genres

module.exports.getBooks = function(callback, limit){
	Book.find(callback).limit(limit);
}

module.exports.getBookById = function(id, callback){
	Book.findById(id, callback);
}

//Add Book
module.exports.addBook = function(book, callback){
	Book.create(book, callback);
}

//Update Book
module.exports.updateBook = function(id, book, options, callback){
	var query ={_id: id};
	var update = {
		title: book.title,
		genre: book.genre,
		description: book.description,
		author: book.author
	}
	Book.findOneAndUpdate(query, update, options, callback);
}

// Delete Book

module.exports.deleteBook = function(id, callback){
	var query ={_id: id};
	Book.remove(query, callback);
}