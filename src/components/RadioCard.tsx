import { Box, useRadio } from "@chakra-ui/react";

export const RadioCard = (props: any) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as='label'>
      <input {...input} />
      <Box
        {...checkbox}
        cursor='pointer'
        borderRadius={4}
        _hover={{
          bg: "#e0ae09",
          color: "white",
          transition: "all 0.2s ease-in-out",
        }}
        _checked={{
          bg: "#F2BB05",
          color: "white",
        }}
        px={5}
        py={2}>
        {props.children}
      </Box>
    </Box>
  );
};
