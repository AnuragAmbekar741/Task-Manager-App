const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectToDb = require('./config/db')

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

const startServer = async () => {
    await connectToDb();
    app.listen(port, () => console.log(`Server running on port ${port}`));
};

startServer();
