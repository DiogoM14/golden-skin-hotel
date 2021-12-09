import { Box, Collapse, useDisclosure } from "@chakra-ui/react"


export const CollapsePeople = ({ teste }: any) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Collapse in={isOpen} animateOpacity>
        <Box
          w="700px" 
          h="120px" 
          bgColor="#fff" 
          borderRadius="lg"
          boxShadow="lg"
          alignItems="center"
          justifyContent="center"
          py="5"
          px="4"
          zIndex="2"
        >
          <h1>Pessoas</h1>
        </Box>
      </Collapse>
  )
}