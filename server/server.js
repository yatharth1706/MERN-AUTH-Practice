const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()
// Middleware
app.use(bodyParser.json());

// access the mongodb uri from config file
const db = require('./config/keys').mongodbURI

// connect to mongodb uri

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Mongodb connected successfully...")
}).catch((err) => {
    console.log(err)
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log("Server started on port ${port}")
})
