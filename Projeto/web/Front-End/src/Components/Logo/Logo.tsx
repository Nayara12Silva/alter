import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

export function Logo(){
    return(
        <div className="Logo">
            <Flex p="5" align="center" gap="5" cursor="pointer">
                <Image  w="90" h="90" src="../img//6720668-cara-de-cachorro-logo-gratis-vetor.jpg"/>
                <Flex direction="column">
                    <Heading>Pets</Heading>
                    <Text>Ecommercer</Text>
                </Flex>
            </Flex>
        </div>
    )   
}