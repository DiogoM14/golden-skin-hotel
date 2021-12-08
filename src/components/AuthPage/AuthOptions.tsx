import { Divider, HStack, Text, VStack, IconButton } from "@chakra-ui/react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export const AuthOptions = () => {
  return (
    <>
      <VStack mt='4' spacing='4'>
        <Text fontFamily='Poppins' fontSize='sm' color='#717171'>
          ou
        </Text>
        <Divider width='50%' borderWidth='1px' borderColor='#D4D4D4' />
        <HStack spacing='4'>
          <IconButton
            borderRadius='full'
            variant='ghost'
            bgcolor='white'
            aria-label='google button'
            icon={<FcGoogle size='40px' />}
          />
          <IconButton
            borderRadius='full'
            variant='ghost'
            bgColor='#4267B2'
            color='white'
            _hover={{ bgColor: "#3b5998" }}
            aria-label='facebook button'
            icon={<FaFacebookF size='24px' />}
          />
          <IconButton
            borderRadius='full'
            variant='ghost'
            bgColor='#1DA1F2'
            color='white'
            _hover={{ bg: "#0d7ae0" }}
            aria-label='twitter button'
            icon={<FaTwitter size='24px' />}
          />
        </HStack>
      </VStack>
    </>
  );
};
