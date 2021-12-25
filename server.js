const express = require ('express')
const connectDb = require('./Config/connectDb')
const ContactRoute = require('./Routes/contact')
require('dotenv').config()

const app = express()


connectDb()

app.use(express.json())
app.use('/api/contacts', ContactRoute)



app.listen(process.env.port, ()=> 
console.log (`server is running on port ${process.env.port}`))