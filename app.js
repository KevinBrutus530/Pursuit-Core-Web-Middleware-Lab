const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

const port = 3000;

let animals = ["sealion", "lion", "tiger"]

app.use(cors());

const isIncluded = (req, res, next) => {
    if(req.params.include(animals)){
        res.json({status: 200, message: true})
    }
    next()
}

app.get("/animals/:animal", isIncluded, (req, res) => {
    // if(res.includes(animals)){
    //     res.json({status: 200, message: true})
    // }
})

app.listen(port, () => {
    console.log("you are running on port ", port)
})
