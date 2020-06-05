/**
 *criando servidor
 * preciso de modulos
 * dependencia 
 *npm init -y vai criar um package.json, transformando minha aplicação em um projeto node
 * 
 */

//criando servidor
//preciso de modulos
//dependencia 

//require > função para pegar o express e salvar na variavel "express" (parece redundante mas é isso msm que vc estar pensando yan do futuro)

//executando a função express no server
const express = require ("express")
const server = express()

//configurar pasta publica
server.use(express.static("public"))


// utilizando o template engine

// pedindo para o nodemodule o "nunjucks"
const nunjucks = require ("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})






// configurar caminho da minha apicação
// página inicial
// res: Requisição (pedido)
// res: Resposta

// __dirname -> devolve o diretorio q eu estou


// Lembrando que como estou rodando em um servidor, o "/" entende-se como home.

// rota GET para a pagina home
server.get ("/", (req, res) => {
    return res.render("index.html", { title : "titulo"})
})

// rota GET para a pagina create-point
server.get ("/create-point", (req, res) => {
    return res.render("create-point.html")
})

server.get ("/search", (req, res) => {
    return res.render("search-results.html")
})



// ligar o servidor 
server.listen(3000)