const mongoose = require('mongoose');

const schema = mongoose.Schema;

const cryptoSchema = new schema({
    name: String,
    amount: Number,
    date: String,
})

let cryptoSchemaTemp = mongoose.model('crypto-assets', cryptoSchema);
module.exports = cryptoSchemaTemp;