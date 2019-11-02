require('./config/config');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', function(req, res) {
    res.json('Hello World');
});
app.get('/user/', function(req, res) {
    res.send("User Get");
});
app.post('/user/', function(req, res) {
    body = req.body;
    if (req.body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: "Es necesario el Campo nombre."
        });
    } else {
        res.json({ body });
    }

});
app.put('/user/:id', function(req, res) {
    id = req.params.id;
    res.json({ id });
});


app.listen(process.env.PORT, () => { console.log('Escuchando puerto: ', 3000); });