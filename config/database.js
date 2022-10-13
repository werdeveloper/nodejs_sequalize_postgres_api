// const { Client } = require('pg')
const dotenv = require('dotenv');
dotenv.config({path:"./config/config.env"})

// Pg Pool Connection
// const connectDatabase = async () => {
//     try {
//         const ClientConfig = new Client({
//             user: process.env.DB_USER,
//             host: process.env.DB_HOST,
//             database: process.env.DB_DATABASE,
//             password: process.env.DB_PASSWORD,
//             port: process.env.DB_PORT,
//           })
//           await ClientConfig.connect(function(err) {
//             if (err) {
//                 console.error('error connecting: ' + err.stack);
//                 return;
//               }
//              console.log("Connected!!!");
//           });
//           return ClientConfig;
//     } catch (error) {
//         console.log(error)
//     }
// }
// module.exports = connectDatabase;


const { Sequelize } = require('sequelize');
const db = new Sequelize(
    process.env.DB_DATABASE,    // DB Name
    process.env.DB_USER,   // DB of user name
    process.env.DB_PASSWORD,    // DB Password
    {
        host: process.env.DB_HOST,  // DB Hostname
        dialect: "postgres",
        logging: false // if you want to show the raw query
    }
);
 
module.exports = db;
