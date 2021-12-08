import {
  Text,
  FormControl,
  Checkbox,
  Button,
  SimpleGrid,
  GridItem,
} from "@chakra-ui/react";
import { Finput } from "../Finput";
import { AuthOptions } from "./AuthOptions";

export const RegisterPanel = () => {
  return (
    <FormControl id='signUp'>
      <SimpleGrid columns={2} columnGap='4'>
        <GridItem colSpan={2}>
          <Finput type='email' placeholder='E-mail' />
        </GridItem>
        <GridItem colSpan={1}>
          <Finput type='text' placeholder='Primeiro Nome' />
        </GridItem>
        <GridItem colSpan={1}>
          <Finput type='text' placeholder='Último Nome' />
        </GridItem>
        <GridItem colSpan={2}>
          <Finput type='password' placeholder='Palavra-passe' />
        </GridItem>
        <GridItem colSpan={2}>
          <Finput type='password' placeholder='Repita a Palavra-passe' />
        </GridItem>

        <GridItem colSpan={2}>
          <Checkbox>
            <Text fontFamily='Poppins' fontSize='xs' color='#717171'>
              Tenho mais de 18 anos.
            </Text>
          </Checkbox>
        </GridItem>

        <GridItem colSpan={2} mx='auto' mt='5'>
          <Button
            paddingX='10'
            bgColor='#F2BB05'
            color='#fff'
            _hover={{ bg: "#e0ae09" }}
            fontFamily='Poppins'
            fontWeight='medium'
            fontSize='md'>
            Registar
          </Button>
        </GridItem>
      </SimpleGrid>
      <AuthOptions />
    </FormControl>
  );
};
