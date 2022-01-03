const mongoose = require("mongoose");

module.exports = async () => {
    try {
        const connectionParams = {
           // useNewUrlParser: true,
           // useCreateIndex: true,
            //useUnifiedTopology: true,
        };
        await mongoose.connect(
           //"mongodb://localhost/final-main",
         // "mongodb://"+process.env.ENV_PORT+":27017/?directConnection=true&serverSelectionTimeoutMS=2000",

         "mongodb://mongodb:mongodb@"+process.env.ENV_PORT+":27017/mongodb?directConnection=true&serverSelectionTimeoutMS=2000",
            connectionParams
        );
        console.log("Connected to database.");
    } catch (error) {
        console.log("Could not connect to database.", error);
    }
};
