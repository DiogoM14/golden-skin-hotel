import { Button, Center } from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";

export const SeeMoreBtn = () => {
  return (
    <Center mt='2.3rem' mb='12'>
      <Button color='#fff' w='' bgColor='#F2BB05' rightIcon={<FiChevronDown />}>
        Ver mais
      </Button>
    </Center>
  );
};
