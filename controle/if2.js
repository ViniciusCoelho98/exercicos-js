function teste1(num) {
  if (num > 7) console.log("Teste1)", num);
  console.log("Teste1) Final");
}

teste1(6);
teste1(8);

function teste2(num) {
  if (num > 7); // Cuidade com o ";", não usar com as estruturas de controle
  {
    console.log("Teste2", num);
  }
}

teste2(6);
teste1(8);
