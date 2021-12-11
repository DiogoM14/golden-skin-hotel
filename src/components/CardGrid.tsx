import { Container, SimpleGrid } from "@chakra-ui/react";
import { Card } from "./Card";
import { CardsHeader } from "./CardsHeader";

interface Props {
  haveHeader?: boolean
}

export function CardGrid({ haveHeader = true }: Props) {
  return (
    <Container maxW='container.lg'>
      { haveHeader && <CardsHeader /> }
      <SimpleGrid columns={3} spacing='6'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </SimpleGrid>
    </Container>
  );
}
