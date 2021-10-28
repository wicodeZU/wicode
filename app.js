const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, "/public")))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//port
const port = 3006

//server
app.listen(port, () => console.log(`server running on ${port}`))