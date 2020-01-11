const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

const port = 3000;

let animals = ["sealion", "lion", "tiger"]

app.use(cors());

const isAnimal = (req, res, next) => {
    let result = req.params
    for(let i = 0; i < animals.length; i++){
        if(animals[i] === result['animal']){
            res.json({status: 200, message: true})
        } else {
            res.json({status: 200, message: false})
        }
    }
    next()
}

// app.use(isAnimal);

app.get("/animals/:animal", isAnimal)

app.listen(port, () => {
    console.log("you are running on port ", port)
})
