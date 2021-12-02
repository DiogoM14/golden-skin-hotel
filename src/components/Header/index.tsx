import { Container, Flex, Heading, Text, Wrap } from "@chakra-ui/react"
import { AuthButtons } from "./AuthButtons"
import { UserAuth } from "./UserAuth"

export const Header = () => {
  return (
    <Container 
      w="100%" 
      maxW="100%" 
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

        {/* <AuthButtons /> */}
        <UserAuth />
      </Flex>
    </Container>
  )
}