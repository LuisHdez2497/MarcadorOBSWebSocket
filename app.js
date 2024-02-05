const express = require('express');
const app = express();
const puerto = 3000;
const path = require('path');
const appHTML = path.join(__dirname, 'public', 'app.html');
app.use(express.static('public'));
app.use('/scripts', express.static(__dirname + '/node_modules'));

app.get('/', (req, res) => {
    res.sendFile(appHTML);
});

app.post('add/score/local', (req, res) => {
    res.send('Agregando puntaje local');
});

app.post('add/score/visitante', (req, res) => {
    res.send('Agregando puntaje visitante');
});

app.post('remove/score/local', (req, res) => {
    res.send('Quitando puntaje local');
});

app.post('remove/score/visitante', (req, res) => {
    res.send('Quitando puntaje visitante');
});

app.listen(puerto, () => {
    console.log(`La aplicación está escuchando en http://localhost:${puerto}`);
});