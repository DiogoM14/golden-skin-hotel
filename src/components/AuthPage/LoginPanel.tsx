import { Center, Text, FormControl, HStack, Button } from "@chakra-ui/react";

import { Finput } from "../Finput";
import { AuthOptions } from "./AuthOptions";

export const LoginPanel = () => {
  return (
    <FormControl id='login'>
      <Finput type='email' placeholder='E-mail' />
      <Finput type='password' placeholder='Palavra-passe' />

      <HStack spacing='1'>
        <Text fontFamily='Poppins' fontSize='xs' color='#717171'>
          Esqueceu-se da palavra-passe?
        </Text>
        <Text
          fontFamily='Poppins'
          fontWeight='bold'
          fontSize='xs'
          color='#717171'
          cursor='pointer'>
          Clique aqui
        </Text>
      </HStack>

      <Center mt='8'>
        <Button
          paddingX='10'
          bgColor='#F2BB05'
          color='#fff'
          _hover={{ bg: "#e0ae09" }}
          fontFamily='Poppins'
          fontWeight='medium'
          fontSize='md'>
          Entrar
        </Button>
      </Center>
      <AuthOptions />
    </FormControl>
  );
};
