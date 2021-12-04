import { Flex, Icon, Center, Text } from "@chakra-ui/react"
import { IconType } from "react-icons"

interface Props {
  name: string
  description: string
  icon: IconType
}

export const FilterContent = ({ name, description, icon }: Props) => {
  return (
    <Center>
      <Flex>
        <Center>
        <Icon as={icon} mr="4" color="#717171" />
          <Flex flexDir="column" textAlign="center">
            <Text fontWeight="medium">{name}</Text>
            <Text color="#717171">{description}</Text>
          </Flex>
        </Center>
      </Flex>
      
    </Center>
  )
}