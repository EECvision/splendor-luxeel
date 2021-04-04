const express = require('express');
const cors = require('cors');
const enforce = require('express-sslify');
const path = require('path');

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(enforce.HTTPS({ trustProtoHeader: true}))
app.use(cors());

const port = process.env.PORT || 5000;

if (process.env.NODE_ENV !== 'production') require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

if(process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
  });
}

app.get('/service-worker.js', (req, res)=>{
  res.sendFile(path.resolve(__dirname, '..', 'build', 'service-worker.js'))
})

app.post('/payment', (req, res)=>{
  const body = {
    source: req.body.token.id,
    amount: req.body.amoout,
    currency: 'usd'
  }

  stripe.charges.create(body, (stripeErr, stripeRes)=>{
    if(stripeErr){
      res.status(500).send({error: stripeErr});
    }else{
      res.status(200).send({success: stripeRes})
    }
  })
})

app.listen(port, error=>{
  if(error) throw error;
  console.log(`app listening on port ${port}`)
})