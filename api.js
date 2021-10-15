const Db = require('./dboperations');
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended:  true }));
app.use(express.json());

app.get('/Produtos',(request, response) => {
  Db.getProdutos().then((data) => {
    response.json(data);
  })
})

app.get('/Produtos/:Cd_Produto',(request, response) => {
  Db.getProduto(request.params.Cd_Produto).then((data) => {
    response.json(data[0]);
  })
})
  
const  port = process.env.PORT || 8090;
app.listen(port);
console.log('API Produto is runnning at ' + port);