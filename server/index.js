const express = require('express');
const cors = require('cors');
const enforce = require('express-sslify');
const path = require('path');

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(enforce.HTTPS({ trustProtoHeader: true}))
app.use(cors());

if(process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname, '../client/build')));

  app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'))
  });
}

const port = process.env.PORT || 5000;

app.listen(port, error=>{
  if(error) throw error;
  console.log(`app listening on port ${port}`)
})