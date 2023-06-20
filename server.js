const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/productModel");
const app = express();

// Middleware to access json file
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Declare routes, ('/route', (1 parameter, 1 parameter))
app.get("/", (req, res) => {
  res.send("NODE API");
});

app.get("/blog", (req, res) => {
  res.send("Hi i am jenny. Testing blog route");
});

app.get("/products", async (req, res) => {
  try {
    // await = wait for the data to respond from the database
    // Then find all the product
    const products = await Product.find({});
    // respond the product to the client
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Fetch by ID
app.get("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Saving the data to the database
app.post("/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// upate the product with PUT method
app.put("/product/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        
        // if no product
        if(!product){
            return res.status(404).json({message: `cannot find any product with ID ${id}`})
        }
        const updatedProduct = await Product.findById()
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// Delete method

app.delete("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res
        .status(404)
        .json({ message: `cannot find any product with ID ${id}` });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// error msg on console
mongoose.set("strictQuery", false);

// establish connection to mongoDB
mongoose
  .connect(
    "mongodb+srv://dbUser:123@node-api.qqbyr5w.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to MongoDB");
    // port listening
    app.listen(3000, () => {
      console.log("Node API is in testing on port 3000");
    });
  })
  .catch((error) => {
    console.log("error");
  });
