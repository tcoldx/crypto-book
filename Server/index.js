const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const mongoose = require('mongoose');
const schema = require('./crypto-schema');
const { ObjectID, ObjectId } = require('bson');
mongoose.connect('mongodb+srv://ttredis:king15as@crypto-codes.neinwrq.mongodb.net/?retryWrites=true&w=majority');


app.use(cors());
app.use(express.json());
app.post("/coin", (req, res) => {
    async function connect() {
        try {
            await schema.create({
                name: req.body.name,
                amount: req.body.amount,
                date: req.body.date,
            })
            console.log("database connected!")
        } catch (err) {
            console.log(err);
        }
    }

    connect();
})

app.get("/getCoin", async (req,res) => {
    try {
    await schema.find({}, (err, result) => {
        res.send(result);
    })
    } catch (err) {
    console.log("error: ", err);
    }
});

app.post("/update/:id", async (req, res) => { 
    const {id} = req.params;
    let body = req.body; 
  console.log(body);
    try {
        schema.findOneAndUpdate(id, body, {upsert: true}, function(err, doc) {
            if (err) return res.send(500, {error: err});
            return res.send('Succesfully saved.');
        });
            console.log("connected to database!");
    } catch (err) {
        console.log("errorrrr: ", err);
    }
   
  
})

app.delete("/deleteCoin/:id", (req, res) => {
   const {id} = req.params;
   schema.findByIdAndDelete(id).exec();
})
    
app.listen(port, () => console.log(`listening on port: ${port}`))
