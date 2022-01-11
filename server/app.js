require('dotenv').config()
const cors = require('cors')
const express = require('express')
const app = express()


//Middlewares
app.use(cors())
app.use(express.json());
app.use(express.static('public'));

app.use('/api/route', require('./routes/home.route'))


app.listen( process.env.PORT, () => {
    console.log('Server Online on port', process.env.PORT)
} )