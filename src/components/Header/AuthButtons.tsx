import { Box, Button } from "@chakra-ui/react";
import NextLink from "next/link";

export const AuthButtons = () => {
  return (
    <Box>
      <NextLink href='/auth/login'>
        <Button
          variant='ghost'
          mr='3'
          fontFamily='Poppins'
          fontWeight='semi-bold'>
          Entrar
        </Button>
      </NextLink>

      <NextLink href='/auth/register'>
        <Button bgColor='#F2BB05' color='#fff' _hover={{ bg: "#e0ae09" }}>
          Registar
        </Button>
      </NextLink>
    </Box>
  );
};
