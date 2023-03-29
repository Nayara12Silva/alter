import { Stack, HStack, VStack, Box, Image, Text, Heading, Button } from '@chakra-ui/react'
import React from 'react'

export function Nay(){
return(
    <>
    <HStack>
        <Box bg="red"textAlign='center' display='flex' flexDirection="column" justifyContent="space-around">
            <Image src='../img/dica-limpeza-vegana-animais-pets-alana_1.webp' alt='dog'w='150'h='200'/>
            <Heading>testando</Heading>
            <Text>kfvnklafv</Text>
            <HStack display='flex'justifyContent="center" gap="4">
            <Button>editar</Button>
            <Button>excluir</Button>
            </HStack>

        </Box>
        
    </HStack>
    </>
)
}