const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

const port = 3000;

app.use(cors());

app.listen(port, () => {
    console.log("you are running on port ", port)
})
