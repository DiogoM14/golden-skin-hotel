import { Box, Button, Divider, Flex, IconButton, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Stat, StatHelpText, StatLabel, StatNumber } from "@chakra-ui/react"
import { BsBellFill } from "react-icons/bs"


export const NotificationPopover = () => {
  return (
    <Popover placement='top-start'>
        <PopoverTrigger>
          <IconButton
            ml="2"
            bgColor="transparent"
            _hover={{ bg: "#fdeeac" }}
            color="gray.800"
            aria-label='Notifications'
            borderRadius="50%"
            icon={<BsBellFill size={18} />}
          />
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader fontWeight='semibold'>Tem reservas nos próximos 7 dias.</PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            <Flex justify="space-between" align="center">
              <Box>
                <Stat>
                  <StatLabel>Quarto 234</StatLabel>
                  <StatNumber>92.02€</StatNumber>
                  <StatHelpText>Feb 12 - Feb 28</StatHelpText>
                </Stat>
              </Box>
              
              <Button 
                size="sm" 
                bgColor="#F2BB05" 
                color="#fff"
                _hover={{ bg: "#e0ae09" }}
              >
                Ver mais
              </Button>
            </Flex>
            
            <Divider mb="2" />

              <Flex justify="space-between" align="center">
              <Box>
                <Stat>
                  <StatLabel>Quarto 234</StatLabel>
                  <StatNumber>92.02€</StatNumber>
                  <StatHelpText>Feb 12 - Feb 28</StatHelpText>
                </Stat>
              </Box>
              
              <Button 
                size="sm" 
                bgColor="#F2BB05" 
                color="#fff"
                _hover={{ bg: "#e0ae09" }}
              >
                Ver mais
              </Button>
            </Flex>
              <Divider my="2" />
          </PopoverBody>
        </PopoverContent>
      </Popover>
  )
}