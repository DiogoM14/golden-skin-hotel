import {
  Text,
  FormControl,
  Checkbox,
  Button,
  SimpleGrid,
  GridItem,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { api } from "../../services/apiClient";
import { Input } from "../Finput";
import { AuthOptions } from "./AuthOptions";

export const RegisterPanel = () => {
  const router = useRouter();
  const toast = useToast();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  function onSubmit(values: any) {
    api
      .post("auth/register", {
        first_name: values.firstName,
        last_name: values.lastName,
        email: values.email,
        phone_number: values.phone,
        password: values.password,
      })
      .then(() => {
        toast({
          title: "Registado com sucesso!",
          description: "Registo concluído com sucesso!",

          status: "success",
          duration: 5000,
          isClosable: true,
        });
        router.push("/auth/login");
      })
      .catch((err) => {
        toast({
          title: "Erro!",
          description: "Ocorreu um erro ao registar!",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl id='signUp'>
        <SimpleGrid columns={2} columnGap='4'>
          <GridItem colSpan={2}>
            <Input
              id='email'
              type='email'
              placeholder='E-mail'
              {...register("email")}
            />
          </GridItem>
          <GridItem colSpan={1}>
            <Input
              id='firstName'
              type='text'
              placeholder='Primeiro Nome'
              {...register("firstName")}
            />
          </GridItem>
          <GridItem colSpan={1}>
            <Input
              id='lastName'
              type='text'
              placeholder='Último Nome'
              {...register("lastName")}
            />
          </GridItem>
          <GridItem colSpan={2}>
            <Input
              id='telephone'
              type='tel'
              placeholder='Telemóvel'
              {...register("phone")}
            />
          </GridItem>
          <GridItem colSpan={2}>
            <Input
              id='password'
              type='password'
              placeholder='Palavra-passe'
              {...register("password")}
            />
          </GridItem>
          <GridItem colSpan={2}>
            <Input
              id='passwordConfirm'
              type='password'
              placeholder='Repita a Palavra-passe'
              {...register("repeatPassword")}
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
              isLoading={isSubmitting}
              type='submit'>
              Registar
            </Button>
          </GridItem>
        </SimpleGrid>
        <AuthOptions />
      </FormControl>
    </form>
  );
};
