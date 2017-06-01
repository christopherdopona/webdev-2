'use strict';

var valorInteiro = 42;
var valorString = "42";


console.log(typeof valorInteiro); // number
console.log(typeof valorString); // string

var compracaoUm = valorInteiro == valorString; // boolean
console.log(compracaoUm); // true, valores sao iguais


var compracaoDois = valorInteiro === valorString;
console.log(compracaoDois); // false, tipos diferentes


var valorUm = "24"; // String
var valorDois = 11; // Number


var valorDaSoma = valorUm + valorDois;
console.log("Valor de valorDaSoma:", valorDaSoma); // junto os dois valores 2411
console.log("Tipo do valor:", typeof valorDaSoma); // 2411

var somaDeNovo = valorUm+ +valorDois;
console.log("Valor do somaDeNovo:", somaDeNovo);

var multiplica = valorUm * valorDois;
console.log("Valor do multiplica:", multiplica);



fuction
coercion
truthy e falsy
equality
inequality
hoisting
condicionais
closuers
modules
this
