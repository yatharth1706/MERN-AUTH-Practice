const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()
const itemsRoute = require('./routes/api/items')
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

const port = process.env.PORT || 5000

app.use('/api/items', itemsRoute)

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})
