require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// APP INSTANCE
const app = express();

// ROUTER 
const productRoutes = require('./routes/productRoutes')
const userRoutes = require('./routes/userRoutes')

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// FUNCTION TO AUTHORIZE USER 
function authenticateToken(req, res ,next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if(token == null) return res.sendStatus(400)
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) return res.sendStatus(403)
      req.user = user
      next()
  })
}

// PRODUCT ROUTES
app.use('/', productRoutes)

// USER ROUTES
app.use('/',authenticateToken, userRoutes)

// app.post('/newCustomer', async (req, res) => {
//     const { name, email, password } = req.body;
//     try {
//       const newCustomer = await Customer.create({
//         name,
//         email,
//         password,
//       });
//       res.status(200).json(newCustomer);
//     } catch (err) {
//       res.status(500).json({ error: err.message, status: err.status });
//     }
// });

// app.post('/newOrder', async(req, res) => {
//   const {customer, products, totalAmount} = req.body
//   try {
//     const order = await Order.create({
//       customer,
//       products,
//       totalAmount
//     })
//     res.status(200).json(order)
//   } catch (err) {
//     res.status(500).json({error: err.message})
//   }
// })
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
