import {Box, Flex} from "@chakra-ui/react";
import React from "react";
import { CardTop } from "../Components/Card";
import { Logo } from "../Components/Logo/Logo";
import { Pesquisa } from "../Components/Search";

export function Home(){
    return(
        <>
        <Box w="90vw" m="auto">
        <Flex textAlign="center" alignItems="Center" justifyContent="space-around">
            <Logo/>
            <Pesquisa/>
            <CardTop/>
        </Flex>
        </Box>
        </>
    )
}
