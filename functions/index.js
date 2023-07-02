// const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const Secret_key = process.env.SECRET_KEY;
// console.log(Secret_key);
const stripe = require("stripe")(Secret_key);
// API
// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  try {
    console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, // subunits of the currency
      currency: "usd",
    });

    // OK - Created
    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.log(error);
  }
});

app.listen(5000, (err) => {
  if (err) {
    console.log(err.messege);
  } else {
    console.log("server runnig");
  }
});
// - Listen command
// exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/challenge-4b2b2/us-central1/api
