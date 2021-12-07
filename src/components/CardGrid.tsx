import { Container, SimpleGrid } from "@chakra-ui/react";
import { Card } from "./Card";
import { CardsHeader } from "./CardsHeader";

export function CardGrid() {
  return (
    <Container maxW='container.lg'>
      <CardsHeader />
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
