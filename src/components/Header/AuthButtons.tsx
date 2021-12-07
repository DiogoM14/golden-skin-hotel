import { Box, Button } from "@chakra-ui/react"
import { Router } from 'next/router'
import NextLink from 'next/link'

export const AuthButtons = () => {
  return (
    <Box>
      <NextLink href='/auth'>
        <Button 
          variant="ghost" 
          mr="3" 
          fontFamily="Poppins" 
          fontWeight="semi-bold"
        >
          Entrar
        </Button>
      </ NextLink>
      
      <Button 
        bgColor="#F2BB05" 
        color="#fff"
        _hover={{ bg: '#e0ae09' }}
      >
        Registar
      </Button>
    </Box> 
  )
}