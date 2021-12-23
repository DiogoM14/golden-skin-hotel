import { Button, Center } from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";

export const SeeMoreBtn = () => {
  return (
    <Center mt='2.3rem' mb='12'>
      <Button
        color='#fff'
        bgColor='#F2BB05'
        _hover={{ bg: "#e0ae09" }}
        rightIcon={<FiChevronDown />}>
        Ver mais
      </Button>
    </Center>
  );
};
