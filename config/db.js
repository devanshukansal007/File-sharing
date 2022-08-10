//require dotenv
require('dotenv').config();

//import mongoose
const mongoose=require('mongoose');

function connectDB(){
    //Database connnection
    mongoose.connect(process.env.MONGO_CONNECTION_URL, { useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true, useFindAndModify : true });
    const connection=mongoose.connection;

    connection.once('open',()=>{
        console.log('Database Connected');
    }).catch(err=>{
        console.log('Connection failed');
    });
}

//to export
module.exports = connectDB;