const express = require('express');
const path = require('node:path');
const categoryRouter = require('./routes/route')

const app = express();

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use('/', categoryRouter)

const PORT = 3000 

app.listen((PORT), (error) => {
    if (error) {
        throw error;
    }

    console.log('Server is listening at port 3000')
})