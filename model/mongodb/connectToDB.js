const config = require("config");
const mongoose = require("mongoose");
const dotenv = require("dotenv")
dotenv.config();
// console.log("con str", config.get("dbConfig.url"));
const {NODE_ENV, DB_ADRESS } = process.env;
// const connectToDB = () => {
//   return mongoose.connect(config.get("dbConfig.url"));
// };

const uri = process.env.MONGODB_URI; // Replace with your environment variable name
// const connectToDB = () => {
//   return mongoose.connect(uri, { 
//     useNewUrlParser: true, 
//     useUnifiedTopology: true,
//     serverSelectionTimeoutMS: 30000, // Increase the timeout value
//   })
//     .then(() => {
//       // Connection successful
//       // Continue with your code
//     })
//     .catch((error) => {
//       // Connection error
//       console.error(error);
//     });
// };

const connectToDB = () => {
  if(process.env.NODE_ENV === 'production'){
    console.log(process.env.NODE_ENV);
    return mongoose.connect(process.env.DB_ADRESS)
  }

 if(process.env.NODE_ENV === 'development'){
    console.log(process.env.NODE_ENV);
    return mongoose.connect(process.env.MONGO_URL)
  }
}
module.exports = connectToDB;
