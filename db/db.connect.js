const mongoose = require("mongoose")
require ("dotenv").config()
const mongoUri = process.env.MONGODB 

const initialData = async() => {
    await mongoose
    .connect (mongoUri)
    .then(() => 
    {
        console.log("Connected to DataBase")
    })
    .catch((error) => console.log("Error Occured" , error))
}

module.exports = {initialData}