import dotenv from 'dotenv';
dotenv.config();

// if(process.env.DATABASE === String) {
//   console.log(process.env.DATABASE);
// }else {
//   console.error(`process.env.DATABASE isn't set correctly`);
// }


module.exports = {
  db: process.env.DATABASE,
  PORT: process.env.PORT
}