const { loadBooks, saveBooks } = require('../utils/fileUtils');

exports.getAllBooks = (req, res) => {
  const books = loadBooks();
  res.json(books);
};

exports.getBookById = (req, res) => {
  const books = loadBooks();
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ error: 'Book not found' });
  }
};

exports.addBook = (req, res) => {
  const books = loadBooks();
  const newBook = req.body;
  newBook.id = books.length + 1;
  books.push(newBook);
  saveBooks(books);
  res.json(newBook);
};

exports.updateBook = (req, res) => {
  const books = loadBooks();
  const bookIndex = books.findIndex((b) => b.id === parseInt(req.params.id));
  if (bookIndex !== -1) {
    books[bookIndex] = { ...books[bookIndex], ...req.body };
    saveBooks(books);
    res.json(books[bookIndex]);
  } else {
    res.status(404).json({ error: 'Book not found' });
  }
};

exports.deleteBook = (req, res) => {
  const books = loadBooks();
  const bookIndex = books.findIndex((b) => b.id === parseInt(req.params.id));
  if (bookIndex !== -1) {
    const deletedBook = books.splice(bookIndex, 1)[0];
    saveBooks(books);
    res.json(deletedBook);
  } else {
    res.status(404).json({ error: 'Book not found' });
  }
};
