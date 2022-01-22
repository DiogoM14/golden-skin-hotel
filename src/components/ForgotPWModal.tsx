import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  FormControl,
  ModalFooter,
  Button,
  Text,
  FormLabel,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { api } from "../services/apiClient";
import { Input } from "./Finput";

const ForgotPWModal = ({ isOpen, onClose }: any) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  const toast = useToast();

  const onSubmit = async (data: any) => {
    api
      .post("/auth/password-reset", { email: data.email })
      .then(() => {
        toast({
          title: "E-mail enviado",
          description: "Verifique o seu e-mail",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        onClose();
      })
      .catch(() => {
        toast({
          title: "Não foi possível enviar o e-mail",
          description:
            "Certifique-se que o e-mail está correto e tente novamente",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size='lg'
      motionPreset='slideInBottom'>
      <ModalOverlay />
      <form onSubmit={handleSubmit(onSubmit)} data-cy='forgot-pw-form'>
        <ModalContent bgColor={"#F4F4F5"} data-cy='forgot-pw-modal'>
          <ModalHeader>Repor palavra-passe</ModalHeader>
          <ModalCloseButton data-cy='forgot-pw-modal-close-btn' />
          <ModalBody>
            <Text>
              Vai receber um email com um link para repor a palavra-passe.
            </Text>

            <FormControl mt='4'>
              <FormLabel htmlFor='email'>Email:</FormLabel>
              <Input
                data-cy='forgot-pw-modal-email-input'
                isRequired
                placeholder='Ex: golden-skin@gmail.com'
                type='email'
                id='email'
                {...register("email")}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              data-cy='forgot-pw-modal-submit-btn'
              color='#fff'
              bgColor='#F2BB05'
              _hover={{ bg: "#e0ae09" }}
              size='lg'
              type='submit'
              isLoading={isSubmitting}>
              Submeter
            </Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
};

ForgotPWModal.displayName = "ForgotPWModal";
export default ForgotPWModal;
