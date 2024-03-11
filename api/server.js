const express = require('express');
const {Web3} = require("web3")
// const ABI = require("./ABI.json")

const app = express()
const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`)
})