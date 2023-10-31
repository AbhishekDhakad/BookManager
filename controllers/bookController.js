const bookDb = require("../models/bookModel");

//@desc Get all Books
//@route GET /api/books
//@access public
const getBooks = async (req, res) => {
  try {
    const books = await bookDb.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//@desc Get Book
//@route GET /api/books/:id
//@access public
const getBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await bookDb.findById(id);
    if (!book) {
      return res.status(404).json({ message: "Book not Found" });
    }
    res.status(200).json({ book });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//@desc Create new Book
//@route POST /api/books
//@access public
const createBook = async (req, res) => {
  try {
    const { title, author, summary } = req.body;

    if (!title || !author) {
      return res.status(400).json({ message: "All field required" });
    }

    const book = await bookDb.create({
      title,
      author,
      summary,
    });

    res.status(201).json({ book });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//@desc Update Book
//@route PUT /api/books/:id
//@access public
const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await bookDb.findByIdAndUpdate(id, req.body);
    if (!book) {
      return res.status(404).json({ message: "Book not Found" });
    }
    const updatedBook = await bookDb.findById(id);
    res.status(200).json({ updatedBook });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//@desc Get all Books
//@route DELETE /api/books/:id
//@access public
const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await bookDb.findByIdAndDelete(id);
    if (!book) {
      return res
        .status(404)
        .json({ message: "Book not Found" });
    }
    res.status(200).json({ book });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getBooks, getBook, updateBook, createBook, deleteBook };
