import { Box, Button } from "@chakra-ui/react";
import NextLink from "next/link";

const AuthButtons = () => {
  return (
    <Box>
      <NextLink href='/auth/login'>
        <Button
          data-testid='login-button'
          variant='ghost'
          mr='3'
          fontFamily='Poppins'
          fontWeight='semi-bold'>
          Entrar
        </Button>
      </NextLink>

      <NextLink href='/auth/register'>
        <Button
          data-testid='signup-button'
          bgColor='#F2BB05'
          color='#fff'
          _hover={{ bg: "#e0ae09" }}>
          Registar
        </Button>
      </NextLink>
    </Box>
  );
};

AuthButtons.displayName = "AuthButtons";
export default AuthButtons;
