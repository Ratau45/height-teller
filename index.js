const express = require('express')
const mongoose = require('mongoose')
const app = express()
const path = require('path')
//const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const routeUrls = require('./routes/routes')

dotenv.config()
mongoose.connect(process.env.CONNECTION_STRING, () => console.log("Database connected!"))

//const port = process.env.Port || 4000;

/*if(process.env.Node_ENV ==="production"){
    app.use(express.static(path.resolve(__dirname,'../height_teller/build')))
    app.get('*', (req, res) => {
        req.sendFile(path.resolve(__dirname, '../height_teller/build', 'index.html'));
      });
}*/

//body pass..handling incoming & outgoing requests
app.use(express.json())
app.use(express.static(path.resolve(__dirname,'../height_teller/build')))
app.use(cors())
app.use('/app', routeUrls)
app.listen(4000, () => console.log("Server is Running"))

//after waking up just remember mongoose is same as mongodb meaning you already made the connection and its linked
//with your database table. jst go make a get request and put the aggregate