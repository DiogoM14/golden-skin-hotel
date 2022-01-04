import {
  Box,
  Button,
  Center,
  Container,
  FormControl,
  FormLabel,
  useToast,
} from "@chakra-ui/react";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../../../components/Finput";
import { AuthContext } from "../../../contexts/AuthContext";
import { api } from "../../../services/apiClient";

export const PasswordReset: NextPage = ({ params }: any) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();
  const { slug } = params;
  const toast = useToast();
  const router = useRouter();
  const { signOut } = useContext(AuthContext);

  const onSubmit = async (data: any) => {
    api
      .post(`/auth/password-reset/${slug[0]}/${slug[1]}`, data)
      .then(() => {
        toast({
          title: "Senha alterada com sucesso",
          description: "Pode fazer login com sua nova senha",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        signOut();
      })
      .catch(() => {
        toast({
          title: "Erro ao alterar senha",
          description: "Por favor, tente novamente",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  };

  return (
    <>
      <Container>
        <Center h='container.sm'>
          <Box
            w='lg'
            h='3xs'
            bgColor='#EFEFEF'
            borderRadius='8'
            boxShadow='lg'
            p='8'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl>
                <FormLabel htmlFor='password'>Nova palavra-passe:</FormLabel>
                <Input
                  isRequired
                  type='password'
                  id='password'
                  {...register("password")}
                />
                <Center>
                  <Button
                    color='#fff'
                    bgColor='#F2BB05'
                    _hover={{ bg: "#e0ae09" }}
                    size='lg'
                    type='submit'
                    isLoading={isSubmitting}>
                    Submeter
                  </Button>
                </Center>
              </FormControl>
            </form>
          </Box>
        </Center>
      </Container>
    </>
  );
};

export default PasswordReset;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  return {
    props: {
      params,
    },
  };
};
