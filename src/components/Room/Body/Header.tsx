import { Box, Heading, HStack, Text } from "@chakra-ui/react"


export const Header = () => {
  return (
    <Box>
      <Heading fontWeight="medium" fontSize="xl">Este quarto oferece</Heading>
      <HStack color="#717171" spacing="2">
        <Text>2 hóspedes</Text>
        <Text>1 quarto</Text>
        <Text>2 camas</Text>
        <Text>1 casa de banho</Text>
      </HStack>
    </Box>
  )
}