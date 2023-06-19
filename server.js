// console.log("Hello World");
// console.log("Node API is in testing on port 3000")

const express = require('express')
const app = express()

// declare route , ('/route', (1 parameter, 1 parameter))
app.get('/', (req, res)=>{
    res.send("Hello NODE API request")
})
 
// listen to port 
app.listen (3000, () =>{
    console.log("Node API is in testing on port 3000")
})