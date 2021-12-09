const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');
const cookieParser = require('cookie-parser')

// app.use(express.static('public'))
app.use(cookieParser())
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
    console.log(req.cookies, "cookies");
    setTimeout(() => {
        res.header('Content-Type', 'text/css');
        res.header('Set-Cookie', 'abc=123; Path=/'); // set cookie, in value goes every info such as path, name and any other cookie value
        res.send(fs.readFileSync(__dirname + "/public/szoking.css"))
    }, 5000);
});

app.get('/public/img.png', (req, res) => {

    setTimeout(() => {
        res.header('Content-Type', 'image/png');
        res.send(fs.readFileSync(__dirname + `/public/img.png`))
    }, 10000);
});

['a', 'b'].forEach((name) => {
    app.get(`/public/${name}.js`, (req, res) => {

        setTimeout(() => {
            res.header('Content-Type', 'application/javascript');
            res.send(fs.readFileSync(__dirname + `/public/${name}.js`))
        }, name === 'a' ? 5000 : 20000);
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})