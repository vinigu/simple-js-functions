const lista = [
  { nome: "Fulano", idade: 20, legal: true },
  { nome: "Ciclano", idade: 30, legal: false },
  { nome: "Beltrano", idade: 40, legal: true },
  { nome: "João", idade: 50, legal: false },
  { nome: "Maria", idade: 60, legal: true },
  { nome: "José", idade: 70, legal: false },
];

const funcaoReduce = (acc, objeto) => {
  return {
    ...acc,
    [objeto.nome]: objeto.idade,
  };
};

console.log(lista.reduce(funcaoReduce, {}));
