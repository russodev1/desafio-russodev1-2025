import { animaisData, brinquedosValidos } from '../Data/dados.js';



class ValidadorEntrada {

  static validarBrinquedos(brinquedos1, brinquedos2) {

    const set1 = new Set(brinquedos1);
    if (set1.size !== brinquedos1.length || brinquedos1.some(b => !brinquedosValidos.includes(b))) {
      return { erro: 'Brinquedo inválido' };
    }


    const set2 = new Set(brinquedos2);

    if (set2.size !== brinquedos2.length || brinquedos2.some(b => !brinquedosValidos.includes(b))) {
      return { erro: 'Brinquedo inválido' };
    }



    return null;

}



  static validarAnimais(ordem) {

    const set = new Set(ordem);
    if (set.size !== ordem.length || ordem.some(a => !animaisData[a])) {
      return { erro: 'Animal inválido' };
    }
    return null;
  }

}



export { ValidadorEntrada };