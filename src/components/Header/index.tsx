import { Container, Flex, Heading, Text, Wrap } from "@chakra-ui/react";
import { AuthButtons } from "./AuthButtons";
import { UserAuth } from "./UserAuth";
import Link from 'next/link'

export const Header = () => {
  return (
    <Container
      w='100%'
      maxW='100%'
      bgColor='#fff'
      h='80px'
      boxShadow='md'
      px='12'
    >
      <Flex align='center' h='100%' justify='space-between'>
        <Link href="/">
          <Heading 
            fontSize='md'
            as="a"
            cursor="pointer"
          >
            Golden Skin
          </Heading>
        </ Link>

        <Wrap spacing='4'>
          <Link href="/about-us">
            <Text as="a" cursor="pointer">Sobre nós</Text>
          </Link>
          <Link href="/rooms">
            <Text as="a" cursor="pointer">Encontre um quarto</Text>
          </Link>
          <Link href="/services">
            <Text as="a" cursor="pointer">Serviços</Text>
          </Link>
        </Wrap>

        <AuthButtons />
        {/* <UserAuth /> */}
      </Flex>
    </Container>
  );
};
