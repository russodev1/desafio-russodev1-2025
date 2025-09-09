import {Animal} from './Classes/animal.js';

import {Pessoa} from './Classes/pessoa.js';

import {ValidadorEntrada} from './Classes/validador-entrada.js';

import {animaisData} from './Data/dados.js';

class AbrigoAnimais {

  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {

    const brinquedos1 = brinquedosPessoa1.split(',').map(b => b.trim());

    const brinquedos2 = brinquedosPessoa2.split(',').map(b => b.trim());

    const ordem = ordemAnimais.split(',').map(a => a.trim());



    const erroAnimais = ValidadorEntrada.validarAnimais(ordem);

    if (erroAnimais) return erroAnimais;

    const erroBrinquedos = ValidadorEntrada.validarBrinquedos(brinquedos1, brinquedos2);

    if (erroBrinquedos) return erroBrinquedos;





    const pessoa1 = new Pessoa(1, brinquedos1);

    const pessoa2 = new Pessoa(2, brinquedos2);



    const resultado = { lista: [] };



    for (let nome of ordem) {

      const dados = animaisData[nome];

      const animal = new Animal(nome, dados.tipo, dados.brinquedos);



      const pessoa1Elegivel = pessoa1.eElegivelPorBrinquedos(animal);

      const pessoa2Elegivel = pessoa2.eElegivelPorBrinquedos(animal);


    let destino = 'abrigo';

    const pessoa1PodeAdotar = pessoa1Elegivel && pessoa1.adotados.length < 3;
    const pessoa2PodeAdotar = pessoa2Elegivel && pessoa2.adotados.length < 3;

    if (pessoa1PodeAdotar && pessoa2PodeAdotar) {
      destino = 'abrigo';
    } else if (pessoa1PodeAdotar) {
      pessoa1.adotar(animal);
      destino = 'pessoa 1';
    } else if (pessoa2PodeAdotar) {
      pessoa2.adotar(animal);
      destino = 'pessoa 2';
    }


      resultado.lista.push(`${nome} - ${destino}`);

    }

    resultado.lista.sort();

    return resultado;

  }

}



export { AbrigoAnimais as AbrigoAnimais };