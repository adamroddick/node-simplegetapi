const express = require('express')
const path = require('path')
const bcrypt = require('bcrypt-nodejs')
const app = express()
const port = 3001

const json = { 
    1: 'Adam',
    2: 'Ben',
    3: 'Daniel',
    4: 'Thomas' 
}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
})

app.get('/json', (req, res) => {
    res.send(json)
})

app.get('/jsonbcryptd', (req, res) => {
    bcrypt.hash(json, null, null, (err, result) => {
        res.send(result)
    })
})

app.listen(port, () => {
    console.log('Listening on port: '+ port)
})