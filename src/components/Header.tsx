import { Container, Flex, Heading, Text, Box, Button, Wrap } from "@chakra-ui/react"

export const Header = () => {
  return (
    <Container 
      w="100%" 
      maxW="1440px" 
      bgColor="#fff" 
      h="80px"
      boxShadow="md"
    >
      <Flex 
        align="center" 
        h="100%" 
        justify="space-around"
      >
        <Heading fontSize="md">Golden Skin</Heading>

        <Wrap spacing="4">
          <Text>Sobre nós</Text>
          <Text>Encontre um quarto</Text>
          <Text>Serviços</Text>
        </Wrap>

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
      </Flex>
    </Container>
  )
}