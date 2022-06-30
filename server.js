// declaring express
const express = require("express");
const { default: mongoose } = require("mongoose");
const server = express();

// attempting to declare body-parser from within express;
// WAY #1 - Redundant imo
// const jsonParser = express.json();
// server.use(jsonParser);
//above line of code is redundant

// Way #2 - More concise.
// we can just execute server.use directly and pss the express function call as an argument
server.use(express.json());
server.use(express.urlencoded({ extended: false })); //remember here this argument is needed as default is true and t/f refers to library to use, with the library in T deprecated, so we're using teh one in F for now this is sufficinet to get this running. Can look into this later.

const productRoutes = require("./routes/product-routes");

// Saving MongoDB URL - this needs to be moved to ENV variable later
const dbURL =
  "mongodb+srv://admin01:123kdd123@cluster0.f96q4.mongodb.net/?retryWrites=true&w=majority";

// MongoDB settings and connect call.

const dbConfig = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose
  .connect(dbURL, dbConfig)
  .then(console.log("Successfully connected to MongoDB"))
  .catch((error) => console.log(error));

// root/main route is up and running
server.get("/", (req, res) => {
  res.send("You have successfully landed on ROOT");
});
// lets USE product routes which are created in product routes file
server.use("/products", productRoutes);

server.listen(3000, () => console.log("Listening on port 3000"));
