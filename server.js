// declaring express
const express = require("express");
const server = express();

// attempting to declare body-parser from within express;
const jsonParser = express.json();
server.use(jsonParser);

const productRoutes = require("./routes/product-routes");

// root/main route is up and running
server.get("/", (req, res) => {
  res.send("You have successfully landed on ROOT");
});
// lets USE product routes which are created in product routes file
server.use("/products", productRoutes);

server.listen(3000, () => console.log("Listening on port 3000"));
