import { Box, Flex, Input, Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../Components/Logo/Logo";
import './form.css'

export function FormLogin(){
       
        return (
           <div className="container">          
                <Logo/>
                <form action="login" method="Post">
                    <Input type="text" focusBorderColor='lime'placeholder="Email" marginBottom={8}/>
                    {/* <Text>Esqueci a senha</Text> */}
                    <Input  type="password" focusBorderColor='lime' placeholder="Senha"/>
                    <Text marginTop={4}>
                      <Link to="/cadastro" id="link">Criar Conta</Link>
                    </Text>
                    <Button type="submit" w={100} marginTop="8" className="btn" id="btn" name="btn">
                     Entrar
                    </Button>
                </form>
              </div>
        )
      }