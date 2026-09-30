import express from "express";

const app = express(); 
app.use(express.json());

let ultimo_id = 1;
let livros = [
  {
    idLivro: 1,
    dsTitulo: "as cronicas de narnia",
    dsAutor: "C S Lewis",
    fgDisponivel: true,
  },
]; 
app.get("/", function (req, res) {
  res.send("seja bem vindo à gestao de livros");
});

app.get("/livros", function (req, res) {
  console.log("chamando rota GET /livros");
  res.json(livros);
});

app.get("/livros/:id", (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
 
    return res
      .status(400) 
      .json({ mensagem: "o parametro precisa ser um numero valido" });
  }

  let livro = livros.find((livro) => {
    return livro.idLivro === id;
  });

  if (!livro) {
    return res.status(404).send();
  }

  res.json(livro);
});

app.post("/livros", (req, res) => {
  let autor_enviado = req.body.dsAutor;
  let titulo_enviado = req.body.dsTitulo;

  if (!autor_enviado || !titulo_enviado) {
    return res
      .status(400)
      .json({ mensagem: "dados faltando, verifique autor e titulo" });
  }

  let id_novo = ultimo_id + 1;
  ultimo_id++;

  let novo_livro = {
    idLivro: id_novo,
    fgDisponivel: true,
    dsTitulo: titulo_enviado,
    dsAutor: autor_enviado,
  };

  livros.push(novo_livro);

  res.status(201).json(novo_livro);
});
//Isso Aqui é codigo copiado durante as aulas 

//Emprestar e Devolver

app.patch("/livros/:id/emprestar", (req, res) => {
  const id = parseInt(req.params.id); //Aqui ele pega o id do livro que está sendo emprestado,
  // que vem na URL da requisição e transforma em un numero inteiro

  if (isNaN(id)) {
    return res
      .status(400)
      .json({ mensagem: "o parametro precisa ser um numero valido" });
  }// se nao for um numero valido, ele retorna um status 400 e uma mensagem de erro

  const livro = livros.find((index) => index.idLivro === id);

  if (!livro) { // se nao achar o livro retorna um status 404 e uma mensagem de erro livro nao encontrado
    return res.status(404).json({ mensagem: "livro nao encontrado" });
  }

  if (!livro.fgDisponivel) {// se ja foi emprestado ele retorna dando esse aviso
    return res
      .status(409)
      .json({ mensagem: "livro ja esta emprestado", livro });
  }

  livro.fgDisponivel = false;

  res.status(200).json(livro);// entao, valida se o livro ta disponivel e empresta
});

app.patch("/livros/:id/devolver", (req, res) => {
  const id = parseInt(req.params.id);//Aqui ele pega o id do livro que está sendo emprestado,
  // que vem na URL da requisição e transforma em un numero inteiro

  if (isNaN(id)) {
    return res
      .status(400)
      .json({ mensagem: "o parametro precisa ser um numero valido" });//se o numero not a number da erro 400
      //e da uma mensgem
  }

  const livro = livros.find((index) => index.idLivro === id); //aqui ele vai procura o livro pelo index

  if (!livro) {
    return res.status(404).json({ mensagem: "livro nao encontrado" });//se nao encontrou o livro da 404 not found
  }

  if (livro.fgDisponivel) {
    return res
      .status(409)
      .json({ mensagem: "livro ja esta disponivel, nao foi emprestado", livro });
  }

  livro.fgDisponivel = true;

  res.status(200).json(livro);// depois de todas a validacoes dai ele da 200,deu boa
});


app.listen(3001);// aqui e a porta que ele vai rodar