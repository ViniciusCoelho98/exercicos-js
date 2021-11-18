let valor; // não inicializada

console.log(valor);
// console.log(valor2); - Error: is not defined

valor = null; // Ausencia de valor

console.log(valor);
// console.log(valor.toString()); - Error: Cannot read properties of null

const produto = {};

console.log(produto.preco);
console.log(produto);

produto.preco = 3.5;

console.log(produto);

produto.preco = undefined;

console.log(!!produto.preco); // Evite atribuir undefined

console.log(produto);

produto.preco = null; // Sem preço

console.log(!!produto.preco);

console.log(produto);
