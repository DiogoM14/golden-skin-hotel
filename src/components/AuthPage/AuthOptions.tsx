import { Divider, HStack, Text, VStack, IconButton } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { provider, getAuth, signInWithPopup, GoogleAuthProvider } from '../../services/firebase'

export const AuthOptions = () => {

  


  function handleSignInWithGoogle() {
    // const auth = getAuth();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);

        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user)
      // }).catch((error) => {
      //   // Handle Errors here.
      //   const errorCode = error.code;
      //   const errorMessage = error.message;
      //   // The email of the user's account used.
      //   const email = error.email;
      //   // The AuthCredential type that was used.
      //   const credential = GoogleAuthProvider.credentialFromError(error);
      //   // ...
    });
  }

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
            onClick={handleSignInWithGoogle}
          />
        </HStack>
      </VStack>
    </>
  );
};
