const functions = require('firebase-functions');

const express = require("express");

const cors = require("cors");

const stripe = require("stripe")('sk_test_51HdzJNAGNjgIXADALn0vLWxI0nb0IsoTAtDP19Ae0cOlzlgKgY95TzPPvTFH7jYU4GAE1bT47enr0XX2lmgUyNy300zcDLbj7e');


// API

// App config
const app = express();

// Middlewares
app.use(cors({origin: true}));
app.use(express.json());

//API routes
app.get('/', (request, response) => response.status(200).send('hello word'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Revived', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    }); 
    //ok, created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

//Listen command
exports.api = functions.https.onRequest(app)

// Example endpoint
// http://localhost:5001/e-challenge-99ec4/us-central1/api