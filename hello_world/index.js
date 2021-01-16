const express = require('express')
const app = express()

app.get('/', function(req, res, next){
    // res.send('Hello world')
    res.send({Hello: "world"})
})

let server = app.listen(8000, function(){
    console.log(`listening in port http://localhost:${server.address().port}`)
})