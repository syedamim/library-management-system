const express = require('express')
const mongoose = require('mongoose')


const port = 3000

const app = express();

app.get('/',(request, result)=>{
    result.send("hello");
});

app.listen(port,()=>{
    `server is listening on Port ${port}`;
});