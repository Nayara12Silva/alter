import { Flex, Input, } from "@chakra-ui/react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './index.css'


export function Pesquisa(){
    return(
      
            <Flex p="5" align="center" gap="5" >
                <Input placeholder='Digite o que você procura' w={600} bg="blackAlpha.200"/>
                <FontAwesomeIcon icon={faSearch} className="pesquisa"/>
            </Flex>
       
    )   
}