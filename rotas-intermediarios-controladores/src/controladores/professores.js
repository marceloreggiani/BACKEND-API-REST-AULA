const professores = require('../controladores/bancodedados');
const filtrarProfessores = (req, res) => {
    //req.query  //req.query é o objeto que armazena as propriedades de parametros de consultas da url.
    const { stack } = req.query;
    let resultado = professores;

    console.log('Cheguei no controlador de listagem do professor');

    if (stack) {
        resultado = professores.filter((professor) => {
            return professor.stack === stack;
        });
    };

    res.send(resultado);
};

const  encontrarUmProfessor = (req, res) => {
    console.log('Rota para encontrar um professor');
    const professorEncontrados = professores.find((professor) => {
        return professor.id === Number(req.params.id);  // lembrando de transformar para o mesmo tipo. o id estava em number e string. O string teve de ser transformado para number
    });
    res.send(professorEncontrados);
};

module.exports = {
    filtrarProfessores,
    encontrarUmProfessor
};