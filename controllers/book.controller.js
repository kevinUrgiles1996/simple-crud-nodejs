const BookModel = require('../models/book.model');

exports.getAllBooks = async (req, res) => {
  const books = await BookModel.find({});
  return res.json(books);
}

exports.getBook = async (req, res) => {
  const { bookId } = req.params;
  const book = await BookModel.findById(bookId);
  return res.json(book);
}

exports.addBook = async (req, res) => {
  const { title, author, price } = req.body;
  const newBook = BookModel({ title, author, price });
  await newBook.save();
  return res.json(newBook);
}

exports.updateBook = async (req, res) => {
  const { bookId } = req.params;
  const { title, price, author } = req.body;
  const book = await BookModel.findById(bookId);
  if (title) book.title = title;
  if (price) book.price = price;
  if (author) book.author = author;
  await book.save();
  return res.json(book);
}

exports.deleteBook = async (req, res) => {
  const { bookId } = req.params;
  await BookModel.findByIdAndRemove(bookId);
  return res.json({ msg: 'Book deleted' })
}