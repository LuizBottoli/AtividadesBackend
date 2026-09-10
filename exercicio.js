const usuario0 = { nome: "João", idade: 29, cidade: "São Paulo", profissao: "Desenvolvedor" };
const usuario1 = { nome: "Claudio", idade: 31, cidade: "Rio de Janeiro", profissao: "Desenvolvedor" };
const usuario2 = { nome: "Maria", idade: 25, cidade: "Rio de Janeiro", profissao: "Designer" };
const usuario3 = { nome: "Pedro", idade: 28, cidade: "Belo Horizonte", profissao: "Engenheiro" };
const usuario4 = { nome: "Ana", idade: 32, cidade: "Curitiba", profissao: "Médica" };
const usuario5 = { nome: "Carlos", idade: 27, cidade: "Porto Alegre", profissao: "Professor" };

const usuarios = [usuario0, usuario1, usuario2, usuario3, usuario4, usuario5];

let encontrouDev = false;

for (let i = 0; i < usuarios.length; i++) {
  if (usuarios[i].profissao === "Desenvolvedor" && usuarios[i].idade > 30) {
    console.log("Usuário encontrado:", usuarios[i]);
    encontrouDev = true; 
  }
}

if (!encontrouDev) {
  console.log("Não há desenvolvedores com mais de 30 anos.");
}

const usuarioEncontrado = usuarios.find(usuario => usuario.profissao === "Desenvolvedor" && usuario.idade > 30);

if (usuarioEncontrado) {
  console.log("Usuário encontrado:", usuarioEncontrado);
} else {
  console.log("Não há desenvolvedores com mais de 30 anos.");
}