class Pessoa { 

   constructor(numero, brinquedos) { 
     this.numero = numero;
     this.brinquedos = brinquedos; 
     this.adotados = [];
   } 



  eElegivelPorBrinquedos(animal) { 
    return animal.podeSerAdotadoPor(this, this.adotados); 
  } 



  podeAdotar(animal) { 
    if (this.adotados.length >= 3) return false; 
    return this.eElegivelPorBrinquedos(animal); 
  } 



   adotar(animal) { 
     this.adotados.push(animal.nome); 
   } 
 } 



 export {Pessoa};