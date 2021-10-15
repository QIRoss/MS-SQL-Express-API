const config = require('./dbconfig');
const sql = require('mssql');

async function  getProdutos() {
    try {
        const pool = await sql.connect(config)
        const products = await  pool.request().query("SELECT * from Produto");
        return  products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
  }

async function getProduto(CdProduto) {
    try {
        const pool = await sql.connect(config);
        const product = await pool.request()
        .query(`SELECT * from Produto where Cd_Produto = ${CdProduto}`);
        return  product.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = {
    getProdutos:  getProdutos,
    getProduto:  getProduto
}