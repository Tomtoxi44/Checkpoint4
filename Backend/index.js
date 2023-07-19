const express = require('express')
require("dotenv").config();
const app = express()


const port = parseInt(process.env.APP_PORT ?? "6000", 10);


app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    // eslint-disable-next-line no-restricted-syntax
    console.log(`Server is listening on ${port}`);
  }
});
