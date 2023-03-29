import { Button, Flex, FormLabel, Input } from "@chakra-ui/react";
import React from "react";
import { useState , useEffect} from "react";
// import axios from "axios";
import { Logo } from "../Components/Logo/Logo";

import './form.css'
export function FormCadastro(){   

        return (
         <>
         <div className="content">
              <form action="add" method="Post" className="formCad">
                   <Flex textAlign="center" alignItems="center" justifyContent="space-around"> 
                    <Logo/>
                    <h1 className="titulo">Faça seu Cadastro</h1></Flex>
                    <FormLabel>Nome</FormLabel>
                    <Input type="text" focusBorderColor='lime'placeholder="Nome Completo" marginBottom={8} name="nome" id="nome"/>
                    <FormLabel>CPF</FormLabel>
                    <Input type="text" focusBorderColor='lime'placeholder="000.000.000-00" marginBottom={8} name="cpf" id="cpf" />
                    <FormLabel>Email</FormLabel>
                    <Input type="text" focusBorderColor='lime'placeholder="exemplo@gmail.com" marginBottom={8} name="email" id="email"/>
                    <FormLabel>Telefone</FormLabel>
                    <Input type="text" focusBorderColor='lime'placeholder="(xx) xxxxx-xxxx" marginBottom={8} name="senha" id="senha"/>
                    <FormLabel>Senha</FormLabel>
                    <Input  type="password" focusBorderColor='lime' placeholder="Senha"/>
                    <Button type="submit" w={100} marginTop="8" className="btn" id="btn" name="btn" >
                     Enviar
                    </Button>
              </form>
           </div>
         </>
           
          
        )
      }