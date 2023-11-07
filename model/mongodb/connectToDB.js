const config = require("config");
const mongoose = require("mongoose");
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
  return mongoose.connect(
  NODE_ENV === 'production' ? DB_ADRESS : 'mongodb://127.0.0.1:27017/final_project',
  {
    useNewUrlParser: true,
    useUnifiedTopology:true,
 }
);
}
module.exports = connectToDB;
