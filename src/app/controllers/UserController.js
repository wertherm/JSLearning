/*
ES6
export default {
  async store(req, res) {
    const { name, email, password } = req.body;

    const user = {
      name,
      email,
      password,
    };

    return res.json(user);
  }
};
*/

//ES5
//https://www.alura.com.br/artigos/utilizando-export-modules-no-node-js
//https://developer.mozilla.org/pt-BR/docs/Learn/Server-side/Express_Nodejs/Introduction
class ModuloDeImpressao {
  constructor() {
    this._codigo = 10;
   }
  imprime(nomes) {
    nomes.forEach(nome => {
        console.log(`${this._codigo}: ${nome}`);
     });
   }
}
module.exports = ModuloDeImpressao;
