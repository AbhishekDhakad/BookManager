const mongoose = require("mongoose");

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please add book title"],
    },
    author: {
      type: String,
      required: [true, "Please add book author"],
    },
    summary: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Book", bookSchema);
