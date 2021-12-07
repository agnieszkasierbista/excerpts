const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');

// app.use(express.static('public'))

// [1, 2, 3, 4, 5, 6, 7, 8].forEach((num) => {
//     app.get(`/public/stylesheet${num}.css`, (req, res) => {
//
//         console.log('request', req.url);
//
//         setTimeout(() => {
//             res.header('Content-Type', 'text/css');
//             res.send(fs.readFileSync(__dirname + `/public/stylesheet${num}.css`))
//         }, 12000);
//     })
// })

app.get('/public/szoking.css', (req, res) => {
    setTimeout(() => {
        res.header('Content-Type', 'text/css');
        res.send(fs.readFileSync(__dirname + "/public/szoking.css"))
    }, 5000);
});

app.get('/public/img.png', (req, res) => {

    setTimeout(() => {
        res.header('Content-Type', 'image/png');
        res.send(fs.readFileSync(__dirname + `/public/img.png`))
    }, 10000);
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})