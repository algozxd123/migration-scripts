const { MongoClient } = require('mongodb');
const mongoUriBuilder = require('mongo-uri-builder');

const uri = mongoUriBuilder({
  username: process.env.MONGO_USER,
  password: process.env.MONGO_PASSWORD,
  host: process.env.MONGO_HOST,
  port: process.env.MONGO_PORT,
  database: process.env.MONGO_DB,
  replicas: process.env.MONGO_REPLICAS,
  options: process.env.MONGO_OPTIONS,
});

const uri2 = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}/${process.env.MONGO_DB}`;
const client = new MongoClient(uri2);

module.exports = client;
