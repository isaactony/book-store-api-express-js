// app.js
const express = require('express');
const app = express();
const booksRouter = require('./routes/books');
const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use('/books', booksRouter);

app.listen(PORT, (req, res) => {
    console.log(`Listening on port ${PORT}`);

})
