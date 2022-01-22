import { Button, Center } from "@chakra-ui/react";
import { FiChevronRight } from "react-icons/fi";
import NextLink from "next/link";

const SeeMoreBtn = () => {
  return (
    <Center mt='2.3rem' mb='12'>
      <NextLink href='/rooms'>
        <Button
          color='#fff'
          bgColor='#F2BB05'
          _hover={{ bg: "#e0ae09" }}
          rightIcon={<FiChevronRight />}>
          Ver mais
        </Button>
      </NextLink>
    </Center>
  );
};

SeeMoreBtn.displayName = "SeeMoreBtn";
export default SeeMoreBtn;
