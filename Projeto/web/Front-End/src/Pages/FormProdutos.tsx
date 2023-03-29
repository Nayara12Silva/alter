import { Button, Flex, FormLabel, Input, RequiredIndicator } from "@chakra-ui/react";
import React, { useState } from "react";
import { Logo } from "../Components/Logo/Logo";
import axios from "axios";
import {useForm} from "react-hook-form"


export function AddProdutos(){
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const addProduto = data => axios.post("", data)

 
    return (
        <>
        <div className="content">
             <form onSubmit={handleSubmit(addProduto)}>
                  <Flex textAlign="center" alignItems="center" justifyContent="space-around"> 
                   <Logo/>
                   <h1 className="titulo">Cadastrar Novos Produtos</h1></Flex>
                   <FormLabel>Nome</FormLabel>
                   <Input type="text" focusBorderColor='lime'placeholder="Nome do Produto" id="nomeProduto" marginBottom={8}{...register('nomeProduto')}/>
                   <FormLabel>Valor</FormLabel>
                   <Input type="text" focusBorderColor='lime'placeholder="R$" marginBottom={8} id="valor"{...register('valor')}/>
                   <FormLabel>fornecedor</FormLabel>
                   <Input type="text" focusBorderColor='lime'placeholder="Nome do fornecedor" marginBottom={8} id="fornecedor"{...register('fornecedor')}/>
                   <FormLabel>Quantidade </FormLabel>
                   <Input type="text" focusBorderColor='lime' marginBottom={8}id="quantidade"{...register('quantidade')}/>
                   <Button type="submit" w={100} marginTop="8" className="btn" id="btn" name="btn">
                    Enviar
                   </Button>
             </form>
          </div>
        </>
          
         
       )
}