import { Container, SimpleGrid } from "@chakra-ui/react";
import { Card } from "./Card";

export function CardGrid() {
  return (
    <Container maxW='container.lg'>
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
