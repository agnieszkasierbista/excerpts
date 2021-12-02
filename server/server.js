const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');

// app.use(express.static('public'))

app.get('/public/stylesheet.css', (req, res) => {

    setTimeout(() => {
        res.header('Content-Type', 'text/css');
        res.send(fs.readFileSync(__dirname + '/public/stylesheet.css'))
    }, 2000);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})