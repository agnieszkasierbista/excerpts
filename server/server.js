const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');

// app.use(express.static('public'))

[1, 2, 3, 4, 5, 6, 7, 8].forEach((num) => {
    app.get(`/public/stylesheet${num}.css`, (req, res) => {

        console.log('request', req.url);

        setTimeout(() => {
            res.header('Content-Type', 'text/css');
            res.send(fs.readFileSync(__dirname + `/public/stylesheet${num}.css`))
        }, 12000);
    })
})



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})