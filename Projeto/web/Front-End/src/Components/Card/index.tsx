import {Flex, Heading, Image,HStack,Box  } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import './index.css'
export function CardTop(){
    return(
        <div className="card">
            <HStack spacing='24px' w='500px' p="2">
                 <Box w='200px' h='50px' cursor="pointer">
                   <Flex textAlign="center" alignItems="center" >
                        <Image src="/img/whatsapp.svg" boxSize='50px' cursor="pointer"/>
                        <Heading size='sm'>Atendimento</Heading>
                   </Flex>
                 </Box>
                 <Box w='200px' h='50px' cursor="pointer">
                        <Heading size='sm' display="flex" textAlign="center" alignItems="center">
                        <Image src="/img/user.svg" boxSize='50px' cursor="pointer"/>
                        <Link to="/login">Cadastre-se</Link>
                        </Heading>
                 </Box>
                 <Box w='200px' h='50px' cursor="pointer">
                   <Flex textAlign="center" alignItems="center" >
                        <Image src="/img/car.svg" boxSize='50px' cursor="pointer"/>
                        <Heading size='sm'>Meu carrinho</Heading>
                   </Flex>
                 </Box>
            </HStack>
        </div>
    )   
}