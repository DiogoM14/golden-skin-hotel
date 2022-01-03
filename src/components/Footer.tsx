import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import { ReactNode } from "react";

const SocialButton = ({
  children,
  label,
}: {
  children: ReactNode;
  label: string;
}) => {
  return (
    <chakra.button
      color='#F2BB05'
      bgColor='#1C1C1C'
      _hover={{ bgColor: "#4f4f4f" }}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export const Footer = () => {
  return (
    <Box bgColor='#1C1C1C' color='white'>
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}>
        <Text fontSize='lg' fontWeight='extrabold'>
          Golden Skin Hotel
        </Text>
        <Text>© 2022 Golden Skin Hotel. All rights reserved</Text>
        <Stack direction={"row"} spacing={6}>
          <SocialButton label={"Twitter"}>
            <FaTwitter />
          </SocialButton>
          <SocialButton label={"Facebook"}>
            <FaFacebook />
          </SocialButton>
          <SocialButton label={"Instagram"}>
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
};
