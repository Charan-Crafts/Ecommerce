require('dotenv').config()

const express = require('express')

const cookieParser = require("cookie-parser")

const app = express()

const Database = require('./config/Database')

const cors = require('cors')

app.use(express.json())

app.use(cookieParser())

app.use(cors({
    origin:["*"],
    methods:["*"],
    allowedHeaders:["*"],
    credentials:true
}))

app.listen(5000,()=>{
    console.log(`Server is running on port 5000`)
})