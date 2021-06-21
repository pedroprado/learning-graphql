const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { dbConnect, dbDisconnect} = require('./config/config.js');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');

const appPort = 4000;

const app = express();

app.use(bodyParser.json());
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true,
}));

dbConnect();

app.listen(appPort, ()=> {
    console.log('listening');
});