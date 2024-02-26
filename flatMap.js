const lista = [
  { nome: "Fulano", idade: 20, legal: true, amigos: ["Ciclano", "Beltrano"] },
  { nome: "Ciclano", idade: 30, legal: false, amigos: ["Fulano", "Beltrano"] },
  { nome: "Beltrano", idade: 40, legal: true, amigos: ["Fulano", "Ciclano"] },
  { nome: "João", idade: 50, legal: false, amigos: ["Maria", "José"] },
  { nome: "Maria", idade: 60, legal: true, amigos: ["João", "Fulano"] },
  { nome: "José", idade: 70, legal: false, amigos: ["Maria", "João"] },
];

const amigos = lista.map((pessoa) => pessoa.amigos);
const amigosFlat = lista.flatMap((pessoa) => pessoa.amigos);
console.log(amigosFlat);
