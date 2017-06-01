'use strict'

var produtos = [];
function Produto(){


  this.obterProduto = function(id){
    var produtoRetorno = produtos.find(function(produto){
      return produto.id == id;
    });
    return produtoRetorno;
  }

  this.obterTodosProdutos = function(){
    return produtos;
  }

  this.criarProduto = function(produto){
    produtos.push(produto);
  }

  this.alterarProduto = function(id, newProduto){
    var flag = false;
    produtos.forEach(function(produto){
      if(produto.id == id){
        produto.id = newProduto.id;
        produto.nome = newProduto.nome;
        produto.codigo = newProduto.codigo;
        produto.quantidade = newProduto.quantidade;
        produto.disponivel = newProduto.disponivel;
        flag = true;
      }
    });
    return flag;
  }  

  this.removerProduto = function(id){
    var produtoIndex;
    produtos.forEach(function(produto, index){
      if(produto.id == id){
        produtoIndex = index;
      }
    });
    if(typeof produtoIndex !== "undefined"){
      produtos.splice(produtoIndex, 1);
      return true;

    }else{
      return false;
    }
  }

}

module.exports = Produto;
