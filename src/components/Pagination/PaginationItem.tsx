import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
  isCurrent?: boolean;
  number: number;
  handleChangePage: (page: number) => void;
}

export const PaginationItem = ({
  isCurrent = false,
  handleChangePage,
  number,
}: PaginationItemProps) => {
  if (isCurrent) {
    return (
      <Button
        size='sm'
        fontSize='xs'
        w='4'
        bg='#F2BB05'
        _hover={{
          bg: "gray.500",
        }}
        onClick={() => handleChangePage(number)}>
        {number}
      </Button>
    );
  }

  return (
    <Button
      size='sm'
      fontSize='xs'
      w='4'
      bg='#fff'
      _hover={{
        bg: "gray.500",
      }}
      onClick={() => handleChangePage(number)}>
      {number}
    </Button>
  );
};
