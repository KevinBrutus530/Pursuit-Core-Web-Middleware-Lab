const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const axios = require("axios")

const port = 3000;

let animals = ["sealion", "lion", "tiger"]

app.use(cors());

//  ANIMAL APP
// const isAnimal = (req, res, next) => {
//     let result = req.params
//     if(animals.includes(result['animal'])){
//         res.json({status: 200, message: true})
//     } else {
//         res.json({status: 200, message: false})
//     }
//     next()
// }

// app.get("/animals/:animal", isAnimal)

// RANDOM NUMBERS APP
const generateSpread = (req, res, next) => {
    let n1 = req.params["num1"]
    let n2 = req.params["num2"]
    res.json(Math.floor(Math.random() * (parseInt(n1) - parseInt(n2) + 1)) + parseInt(n2));
    next();
}
//app.use(generateSpread());
app.get("/random/:num1/:num2",generateSpread, (req, res) =>{
    let n1 = req.params["num1"]
    let n2 = req.params["num2"]
    //res.json({ status: "success", range: `[${req.params["num1"]}, ${req.params["num2"]}]`, randPick: `Math.floor(Math.random() * (parseInt(n1) - parseInt(n2) + 1)) + parseInt(n2)`})
    res.json({ status: "success", range: `[${n1}, ${n2}]`, randPick: `${Math.floor(Math.random() * (parseInt(n1) - parseInt(n2) + 1)) + parseInt(n2)}`})
})


app.listen(port, () => {
    console.log("you are running on port ", port)
})
