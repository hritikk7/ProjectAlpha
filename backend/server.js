const express = require("express");
const app = express();

const connectDb = require("./db/db");

// port
const PORT = process.env.PORT || 5000;

//database connection
connectDb();

app.get("/", (req, res) => [res.send("helloo")]);


app.listen(PORT, () => {
  console.log(`Listning on Port: ${PORT}`);
});
