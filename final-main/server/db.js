
const mongoose = require("mongoose");

module.exports = async () => {
    try {
        const connectionParams = {
           // useNewUrlParser: true,
           //useCreateIndex: true,
          // useUnifiedTopology: true,
        };
        await mongoose.connect(
            "mongodb://"+process.env.ENV_PORT+":27017/?directConnection=true&serverSelectionTimeoutMS=2000",
             // "mongodb://127.0.0.1:27017/todo-app",
              connectionParams
          );
    } catch (error) {
        console.log("Could not connect to database.", error);
    }
};
