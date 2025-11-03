const express = require('express');
const path = require('node:path');
const categoryRouter = require('./routes/route')
require('dotenv').config()

const app = express();

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use('/', categoryRouter)

const PORT = process.env.PORT || 3000 

app.listen((PORT), (error) => {
    if (error) {
        throw error;
    }

    console.log(`Server is listening at port ${PORT}`)
})

