import { Input } from "@chakra-ui/react";

interface Props {
  type: string;
  placeholder: string;
}

export function Finput({ type, placeholder, ...rest }: any) {
  return (
    <Input
      type={type}
      placeholder={placeholder}
      height='3.5rem'
      bgColor='white'
      borderRadius='lg'
      p='4'
      variant='flushed'
      _focus={{
        borderColor: "#F2BB05",
      }}
      mb='4'
      {...rest}
    />
  );
}
