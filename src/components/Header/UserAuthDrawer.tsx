import { Avatar, Button, ButtonGroup, DrawerBody, DrawerFooter, GridItem, HStack, SimpleGrid, Text, VStack } from "@chakra-ui/react"
import Link from "next/link"

import { signOut } from "../../contexts/AuthContext"

interface Props {
  user: string
}

export const UserAuthDrawer = ({ user }: Props) => {
  return (
    <>
      <DrawerBody>
        <HStack>
          <Avatar
            name="Diogo Martins" 
            src="https://www.github.com/diogom14.png" 
            bg="#F2BB05"
            size="md"
          />
          <Text mx="2">{user}</Text>
        </HStack>

        <SimpleGrid mt="10" columns={2} gap="4">
          <Button>
            <Link href="/about-us">
              Sobre nós
            </Link>
          </Button>

          <Button>
            <Link href="/services">
            Contactos
            </Link>
          </Button>

          <GridItem colSpan={2} justifySelf="center">
            <Button>
              <Link href="/rooms">
                Encontre um quarto
              </Link>
            </Button>
          </GridItem>
        </SimpleGrid>
      </DrawerBody>

      <DrawerFooter>
        <HStack>
          <Button>Configurações</Button>
          <Button bgColor="#F2BB05" color="#fff" onClick={signOut}>Sair</Button>
        </HStack>
      </DrawerFooter>
    </>
  )
}