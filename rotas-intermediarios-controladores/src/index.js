const express = require ('express');
const app = express();
const {filtrarProfessores, encontrarUmProfessor} = require('./controladores/professores');

const primeiroIntermediario = (req, res, next) => {
    console.log('passei no primeiro intermediario');
    next();
};

const segundoIntermediario = (req, res, next) => {
    console.log('passei no intermediario da rota');
    next();
};

const intermediarioDaRota = (req, res, next) => {
    console.log('passei no segundo intermediario');
    next();
};


//app.use(primeiroIntermediario);
//app.use(segundoIntermediario);

// localhost:3000/professores
app.get('/professores', intermediarioDaRota, filtrarProfessores);

// localhost:3000/professores/1
app.get('/professores/:id', encontrarUmProfessor);

app.listen(3000);