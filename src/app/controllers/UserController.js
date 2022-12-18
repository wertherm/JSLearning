//Trecho ES6 que exporta um objeto com uma função "store".
//Extrai os valores de "name", "email" e "password" do corpo da solicitação e os armazena em uma variável chamada "user".
//Em seguida, a função retorna esses dados em formato JSON usando o método "json" da resposta.
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

//Trecho ES5 que define uma classe "ModuloDeImpressao".
//Essa classe tem um construtor que inicializa uma propriedade "_codigo" com o valor 10.
//Também tem uma função "imprime" que imprime cada elemento de uma matriz de nomes, precedido pelo valor da propriedade "_codigo". Por fim, o módulo é exportado usando o método "module.exports". Isso permite que outros módulos importem e usem a classe "ModuloDeImpressao".
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
