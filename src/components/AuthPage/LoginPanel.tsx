import {
  Center,
  Text,
  FormControl,
  HStack,
  Button,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthContext";
import { Input } from "../Finput";
import ForgotPWModal from "../ForgotPWModal";

const LoginPanel = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { signIn } = useContext(AuthContext);

  async function onSubmit({ email, password }: any) {
    await signIn({ email, password });
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} data-cy='login-form'>
        <FormControl id='login' isInvalid={errors.name}>
          <Input
            id='email'
            type='email'
            placeholder='E-mail'
            error={errors.email}
            {...register("email")}
          />

          <Input
            id='password'
            type='password'
            placeholder='Palavra-passe'
            error={errors.password}
            {...register("password")}
          />

          <HStack spacing='1'>
            <Text fontFamily='Poppins' fontSize='xs' color='#717171'>
              Esqueceu-se da palavra-passe?
            </Text>
            <Text
              data-cy='forgot-pw-modal-btn'
              fontFamily='Poppins'
              fontWeight='bold'
              fontSize='xs'
              color='#717171'
              cursor='pointer'
              onClick={onOpen}>
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
              type='submit'>
              Entrar
            </Button>
          </Center>
          {/* <AuthOptions /> */}
        </FormControl>
      </form>
      <ForgotPWModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

LoginPanel.displayName = "LoginPanel";
export default LoginPanel;
