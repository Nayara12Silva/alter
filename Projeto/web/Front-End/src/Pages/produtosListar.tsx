import { type } from "os";
import React, { Component, useEffect, useState } from "react";
import { api } from "../Services/api";
import {Table,Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer, Grid, GridItem,} from '@chakra-ui/react'

type useProdutos={
  idProduto: Number,   
  nomeProduto: string,
  Valor:string,
  quantidade: string,
  fornecedor: string,
}

 export class ListarProduto extends Component{
  state= {produtos:[]}; //estado para salvar os produtos
  async componentDidMount(){
    const response = await api.get<useProdutos>('listarProdutos');
    // console.log(response.data);
    this.setState({produtos: response.data});
  }
    render(){
      const {produtos} = this.state;
      console.log(produtos)
      return(
        <>
         {/* <Grid templateColumns='repeat(3, 1fr)' gap={6}></Grid> */}
         <h1>Lista De Produtos Cadastrados</h1>
          <ul>
          {produtos.map(produto=>(
            <>
            <li key={produto.idProduto}>Nome do Produto:{produto.nomeProduto}</li>
            <li>Valor do Produto:{produto.valor}</li>
            </>

          ))}
          </ul>
        </>
      )
    }
}

