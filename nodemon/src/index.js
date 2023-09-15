const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Servidor Iniciado')
});

app.listen(3000);