import {
  Text,
  FormControl,
  Checkbox,
  Button,
  SimpleGrid,
  GridItem,
  Input,
} from "@chakra-ui/react";
import { randomInt } from "crypto";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthContext";
import { api } from "../../services/apiClient";
import { Finput } from "../Finput";
import { AuthOptions } from "./AuthOptions";

export const RegisterPanel = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()

  const address = {
    "street": "teste",
    "city": "teste",
    "postal_code": "teste",
    "country": "teste",
  }

  const nifImprovisado = Math.random() * 1000000000

  function onSubmit(values: any) {
    console.log(values)
    api.post("auth/register", {
      name: values.firstName,
      email: values.email,
      phone_number: values.phone,
      birthday: "10-01-2020",
      address: address,
      nif: nifImprovisado,
      password: values.password
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl id='signUp'>
        <SimpleGrid columns={2} columnGap='4'>
          <GridItem colSpan={2}>
            {/* <Finput type='email' placeholder='E-mail' /> */}
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
          </GridItem>
          <GridItem colSpan={1}>
            {/* <Finput type='text' placeholder='Primeiro Nome' /> */}
            <Input
              type="name"
              placeholder="Primeiro Nome"
              height='3.5rem'
              bgColor='white'
              borderRadius='lg'
              p='4'
              variant='flushed'
              _focus={{
                borderColor: "#F2BB05",
              }}
              mb='4'
              {...register('firstName', {
                required: 'This is required',
                minLength: { value: 4, message: 'Minimum length should be 4' },
              })}
            />
          </GridItem>
          <GridItem colSpan={1}>
            {/* <Finput type='text' placeholder='Último Nome' /> */}
            <Input
              type="name"
              placeholder="Último nome"
              height='3.5rem'
              bgColor='white'
              borderRadius='lg'
              p='4'
              variant='flushed'
              _focus={{
                borderColor: "#F2BB05",
              }}
              mb='4'
              {...register('lastName', {
                required: 'This is required',
                minLength: { value: 4, message: 'Minimum length should be 4' },
              })}
            />
          </GridItem>
          <GridItem colSpan={2}>
            {/* <Finput type='tel' placeholder='Telemóvel' /> */}
            <Input
              type="tel"
              placeholder="Telémovel"
              height='3.5rem'
              bgColor='white'
              borderRadius='lg'
              p='4'
              variant='flushed'
              _focus={{
                borderColor: "#F2BB05",
              }}
              mb='4'
              {...register('phone', {
                required: 'This is required',
                minLength: { value: 4, message: 'Minimum length should be 4' },
              })}
            />
          </GridItem>
          <GridItem colSpan={2}>
            {/* <Finput type='password' placeholder='Palavra-passe' /> */}
            <Input
              type="password"
              placeholder="Palavra-pasee"
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
          </GridItem>
          <GridItem colSpan={2}>
            {/* <Finput type='password' placeholder='Repita a Palavra-passe' /> */}
            <Input
              type="password"
              placeholder="Repita a Palavra-passe"
              height='3.5rem'
              bgColor='white'
              borderRadius='lg'
              p='4'
              variant='flushed'
              _focus={{
                borderColor: "#F2BB05",
              }}
              mb='4'
              {...register('repeatPassword', {
                required: 'This is required',
                minLength: { value: 4, message: 'Minimum length should be 4' },
              })}
            />
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
              fontSize='md'
              type="submit"
            >
              Registar
            </Button>
          </GridItem>
        </SimpleGrid>
        <AuthOptions />
      </FormControl>
    </form>
  );
};
