const express = require("express")
const bodyParser = require('body-parser');
const dataRoute = require("./route/randomRoute")

const app = express()

// middleware to parse JSON 

app.use(express.json())

// route middleware

app.use(dataRoute)

const port = 4000;


app.listen(port,()=>{
    console.log(`application listening on port ${port}`)
})
