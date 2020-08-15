// usei o express para criar e configurar o meu servidor 
const express = require("express")
const server = express()

// configurando arquivos estaticos (css, scripts, imagens)
server.use(express.static("public"))

// configurando o nunjucks

const nunjucks = require("nunjucks")
nunjucks.configure("view",{
  express:server
})

// criei uma rota / e capturo o pedido do cliente  para responder
server.get("/", function(req, res){
  return res.render("index.html")
})

server.get("/idea", function(req, res){
  return res.render( "idea.html")
})

// usando a porta 3000 para o meu servidor
server.listen(3000)