const mongoose = require('mongoose')

const DatabaseConnection = mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Database is connected")
})

module.exports = DatabaseConnection