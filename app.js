//Precisa do módulo sucrase para utilizar 'import' (ES6) https://www.geeksforgeeks.org/how-to-use-an-es6-import-in-node-js
//import express from 'express';
const express = require('express');

const app = express();

app.listen(3333, () => {
  console.log('Servidor executando em localhost:3333'); //Mostra tanto no terminal como no browser
})
