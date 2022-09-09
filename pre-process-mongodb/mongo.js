const { MongoClient } = require('mongodb');

const uri2 = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}/${process.env.MONGO_DB}`;
const client = new MongoClient(uri2);

module.exports = client;