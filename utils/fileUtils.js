const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..','books.json');

function loadBooks() {
  const rawData = fs.readFileSync(filePath);
  return JSON.parse(rawData);
}

function saveBooks(books) {
  const data = JSON.stringify(books, null, 2);
  fs.writeFileSync(filePath, data);
}

module.exports = {
  loadBooks,
  saveBooks,
};
