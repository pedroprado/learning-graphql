const express = require('express');
const models = require('./models');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const schema = require('./schema/schema');

const appPort = 4000;
const app = express();
const dbUser = "root";
const dbPassword = "example";
const dbHost = "localhost"
const dbPort = 27017;
const dbName = "example";
const dbUrlAuthenticated = `mongodb://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}?authSource=admin`;
const dbURL = "mongodb://localhost:27017";

// Replace with your mongoLab URI
const MONGO_URI = dbURL;
if (!MONGO_URI) {
  throw new Error('You must provide a MongoLab URI');
}

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI);
mongoose.connection
    .once('open', () => console.log('Connected to MongoLab instance.'))
    .on('error', error => console.log('Error connecting to MongoLab:', error));

app.use(cors())
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(appPort, ()=> {
    console.log('listening');
});
