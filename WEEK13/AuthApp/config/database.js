const mongoose = require("mongoose");

require("dotenv").config();

exports.connect = () => {
    mongoose.connect(process.env.MONGODB_URL,{})
    .then(() => {console.log("DB CONNETED SUCCESSFULLY")})
    .catch((error) => {
        console.log("DB CONNECTION ERROR");
        console.log(error);
        process.exit(1);
    });
}