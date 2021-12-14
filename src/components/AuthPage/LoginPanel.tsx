import { Center, Text, FormControl, HStack, Button, Input } from "@chakra-ui/react";
import { useContext } from "react";
import { useForm } from 'react-hook-form'
import { AuthContext } from "../../contexts/AuthContext";

import { Finput } from "../Finput";
import { AuthOptions } from "./AuthOptions";

export const LoginPanel = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()

  const { signIn } = useContext(AuthContext)

  async function onSubmit({ email, password }: any) {
    console.log({email, password})
    await signIn({ email, password })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl id='login' isInvalid={errors.name}>
      <Input
        type="email"
        placeholder="E-mail"
        height='3.5rem'
        bgColor='white'
        borderRadius='lg'
        p='4'
        variant='flushed'
        _focus={{
          borderColor: "#F2BB05",
        }}
        mb='4'
        {...register('email', {
          required: 'This is required',
          minLength: { value: 4, message: 'Minimum length should be 4' },
        })}
      />

      <Input
        type="password"
        placeholder="Palavra-passe"
        height='3.5rem'
        bgColor='white'
        borderRadius='lg'
        p='4'
        variant='flushed'
        _focus={{
          borderColor: "#F2BB05",
        }}
        mb='4'
        {...register('password', {
          required: 'This is required',
          minLength: { value: 4, message: 'Minimum length should be 4' },
        })}
      />

        {/* <Finput 
          type='email' 
          placeholder='E-mail' 
          {...register('email', {
            required: 'This is required',
            minLength: { value: 4, message: 'Minimum length should be 4' },
          })}
        />

        <Finput 
          type='password' 
          placeholder='Palavra-passe' 
          {...register('password', {
            required: 'This is required',
            minLength: { value: 4, message: 'Minimum length should be 4' },
          })}
        /> */}

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
            fontSize='md'
            isLoading={isSubmitting}
            type='submit'
          >
            Entrar
          </Button>
        </Center>
        <AuthOptions />
      </FormControl>
    </form>
  );
};
