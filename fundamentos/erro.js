function tratarErroELancar(erro) {
  // throw new Error("...");
  // throw 10;
  // throw true
  // throw 'mensage'
  throw {
    nome: erro.name,
    msg: erro.mensagem,
    date: new Date(),
  };
}

function imprimirNomeGritado(obj) {
  try {
    console.log(obj.name.toUpperCase() + "!!!");
  } catch (error) {
    tratarErroELancar(error);
  } finally {
    console.log("finali");
  }
}
const obj = { name: "Roberto" };

imprimirNomeGritado(obj);
