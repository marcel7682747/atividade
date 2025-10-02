const usuarios = [
  {
    nome: "Carlos",
    idade: 28,
    email: "carlos@exemplo.com",
    cidade: "São Paulo",
    interesses: ["Música", "Tecnologia", "Fotografia"]
  },
  {
    nome: "Beatriz",
    idade: 22,
    email: "beatriz@exemplo.com",
    cidade: "Rio de Janeiro",
    interesses: ["Viagens", "Leitura", "Cinema"]
  }
];


const {nome, cidade} = usuarios[0];
console.log(nome);
console.log(cidade);

const usuariosDoNorte = {nome: "ana",
    idade: 20,
    email: "ana364@exemplo.com",
    cidade: "manaus",
    interesses: ["ler livros"] }


const beatrizAtualizada = {...usuarios[1],
  email: "bia.dev@exemplo.com"
};
// os pontos são o spread operator 

console.log(beatrizAtualizada);

