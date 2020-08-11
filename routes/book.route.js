const router = require('express').Router();
const bookController = require('../controllers/book.controller');

router.get('/books', bookController.getAllBooks);

router.get('/books/:bookId', bookController.getBook);

router.post('/books', bookController.addBook);

router.patch('/books/:bookId', bookController.updateBook);

router.delete('/books/:bookId', bookController.deleteBook);






module.exports = router;