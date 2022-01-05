import { Button, Center } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FiChevronDown } from "react-icons/fi";

export const SeeMoreBtn = () => {
  const router = useRouter()

  return (
    <Center mt='2.3rem' mb='12'>
      <Button
        color='#fff'
        bgColor='#F2BB05'
        _hover={{ bg: "#e0ae09" }}
        rightIcon={<FiChevronDown />}
        onClick={() => router.push("/rooms")}
      >
        Ver mais
      </Button>
    </Center>
  );
};
