require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { connectionToDb, getDb } = require('./db');
const Product = require('./models/productModel');
const Customer = require('./models/customerModel');

// APP INSTANCE
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.get('/', (req, res) => {
  res.json('Welcome to home page');
});

app.post('/products', async (req, res) => {
  const {
    name,
    description,
    price,
    category,
    brand,
    quantityAvailable,
    imageUrl,
  } = await req.body;
  try {
    const product = await Product.create({
      name,
      description,
      price,
      category,
      brand,
      quantityAvailable,
      imageUrl,
    });
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }

  app.post('/newCustomer', async (req, res) => {
    const { name, email, password } = req.body;
    try {
      const newCustomer = await Customer.create({
        name,
        email,
        password,
      });
      res.status(200).json(newCustomer);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  // try {
  //   Product.save({
  //     name: 'green shirt',
  //     description: 'blah blah blah',
  //     price: 250,
  //     category: 'shirts',
  //     brand: 'Lewsis',
  //     quantityAvailable: 10,
  //     imageUrl: 'black shirt.avif'
  //   }).then((data) => {
  //     res.json(data)
  //   })

  //   res.json(newProduct)
  // } catch(err) {
  //   res.json('Rejected')
  // }
});

// app.get("/books", (req, res) => {
//   const p = req.query.p || 1
//   const booksPerPage = 1

//   db.collection("books")
//     .find()
//     // .skip(p * booksPerPage)
//     .limit(p * booksPerPage)
//     .sort({ author: 1 })
//     .toArray()
//     .then((books) => {
//       res.status(200).json(books);
//     })
//     .catch((err) => {
//       res.status(500).json("Problem in fetching");
//     });
// });

// app.get("/books/:id", (req, res) => {
//   // const id = new ObjectId(req.params.id);
//   if (mongoose.isValidObjectId(req.params.id)) {
//     db.collection("books")
//       .findOne({ _id: new ObjectId(req.params.id) })
//       .then((data) => {
//         res.status(200).json(data);
//       })
//       .catch((err) => {
//         res.status(500).json(err);
//       });
//   } else {
//     res.json("Invalid id")
//   }
// });

// DATABASE CONNECTION
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('Listening to PORT 4000 and connected to database');
    });
  })
  .catch((err) => {
    console.log(err);
  });
