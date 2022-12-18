//CLI (pós-clone):
//npm install
//npm start
//curl localhost:3333
//npm init -y - Só para caso o package.json não tenha sido criado

//Precisa do módulo sucrase para utilizar 'import' (ES6) https://www.geeksforgeeks.org/how-to-use-an-es6-import-in-node-js
//import express from 'express';
const express = require('express');
const app = express();

//ES6
const UserController = require('./app/controllers/UserController');
//https://www.youtube.com/watch?v=uonKHztGhko

//ES6
app.post('/users', UserController.store); //Cria rota /users

app.listen(3333, () => {
  console.log('Servidor executando em localhost:3333');
})
