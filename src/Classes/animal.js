class Animal { 

   constructor(nome, tipo, brinquedos) { 
     this.nome = nome; 
     this.tipo = tipo; 
     this.brinquedos = brinquedos; 
   } 



  podeSerAdotadoPor(pessoa, outrosAdotados) { 
    const brinquedosPessoa = pessoa.brinquedos;

    if (this.nome === 'Loco') { 
       return outrosAdotados.length > 0;
    } 


    if (this.tipo === 'gato') {
      return this.brinquedos.every(brinquedo => brinquedosPessoa.includes(brinquedo));
    }

    if (this.tipo === 'cão') { 
      let index = 0; 
      for (let brinquedo of brinquedosPessoa) { 
        if (brinquedo === this.brinquedos[index]) index++; 
        if (index === this.brinquedos.length) return true; 
      } 
      return false; 
    } 
    return false; 
  } 

} 



 export { Animal };