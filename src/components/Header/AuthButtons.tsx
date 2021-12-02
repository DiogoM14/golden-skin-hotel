import { Box, Button } from "@chakra-ui/react"


export const AuthButtons = () => {
  return (
    <Box>
      <Button variant="ghost" mr="3" fontFamily="Poppins" fontWeight="semi-bold">Entrar</Button>
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