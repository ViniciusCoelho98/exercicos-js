let a = 3;

global.b = 123;

this.c = 456;
this.d = false;
this.e = "Teste";

console.log(a);
console.log(global.b);
console.log(this.c);
console.log(module.exports.c);
console.log(module.exports === true);
console.log(typeof module.exports);

// Criando uma variavel maluca sem var e let
abc = 3;

console.log(global.abc);
