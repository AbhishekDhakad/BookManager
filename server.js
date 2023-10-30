const express = require("express");
const connectDb = require("./config/dbConnection")
const dotenv = require("dotenv").config();

connectDb();
const app = express();
app.use(express.json());

const port = process.env.PORT || 5000;

const bookRoutes = require("./routes/bookRoutes");

app.use('/api/books', bookRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})