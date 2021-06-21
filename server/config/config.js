const mongoose = require('mongoose');

const dbURL = "mongodb://localhost:27017";

const dbUser = "root";
const dbPassword = "example";
const dbHost = "localhost"
const dbPort = 27017;
const dbName = "example";
const dbUrlAuthenticated = `mongodb://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}?authSource=admin`;

const dbConnect = () => {
    mongoose.connect(dbURL, {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    });

    mongoose.connection.once("open", async () => {
        console.log("connected to database")
    });

    mongoose.connection.on("error", (err) => {
        console.log("Error connecting to database  ", err);
    });
}

const dbDisconnect = () => {
    
    if (!mongoose.connection) {
      return;
    }
    
    mongoose.disconnect();

    mongoose.once("close", async () => {
        console.log("Diconnected  to database");
    });

};

module.exports = {
    dbConnect,
    dbDisconnect
}