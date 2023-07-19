const express = require('express')
require("dotenv").config();
const app = express()
app.use(express.json());
const router = require("./src/routes/routes");


const cors = require("cors");

app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);

app.use(router);

const port = parseInt(process.env.APP_PORT ?? "6000", 10);

app.get('/', (req,res) => {
  res.send('hello')
})

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    // eslint-disable-next-line no-restricted-syntax
    console.log(`Server is listening on ${port}`);
  }
});
