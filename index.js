const express = require('express');

const server = express();

server.use(express.json());

const carros = ['Mclaren', 'Ferrari', 'Uno2portas'];

//Retorna o carros para
server.get('/carros/:index', (req, res) => {
    const { index } = req.params;

    return res.json(carros[index]);
});

//Retorna Todos os carros
server.get('/carros/', (req, res) => {
    return res.json(carros);
});

//Adicionar Carros
server.post('/carros', (req, res) => {
    const { name } = req.body;
    carros.push(name);

    return res.json(carros);
});


//Atulizar um carro
server.put('/carros/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    carros[index] = name;

    return res.json(carros);
});

//apagar

server.delete('/carros/:index', (req, res) => {
    const { index } = req.params;

    carros.splice(index, 1);
    return res.json({ message: "O Carro foi retirado" });
});








server.listen(3000);