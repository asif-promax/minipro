const express = require("express");
const { connectDB } = require("./connect/db");
require("dotenv").config();
const routes = require("./routes/routes");
const cors = require("cors");

const app = express();

connectDB();
app.use(express.json());
app.use(cors());

app.use("/auth", routes);
const PORT = process.env.PORT || 5002;
console.log(PORT);

app.listen(PORT, () => console.log("server is running"));
