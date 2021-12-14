import { Container, SimpleGrid, Skeleton } from "@chakra-ui/react";
import { Card } from "./Card";
import { CardsHeader } from "./CardsHeader";
import { api } from "../../services/apiClient";
import { useEffect, useState } from "react";
import { RoomProps } from "../../utils/TRoom";

interface Props {
  haveHeader?: boolean;
}

export function CardGrid({ haveHeader = true }: Props) {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    api.post("/rooms").then((response) => {
      setRooms(response.data);
    });
  }, []);

  return (
    <Container maxW='container.lg'>
      {haveHeader && <CardsHeader />}
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing='6'>
        {rooms ? (
          rooms.map((room: RoomProps) => <Card key={room._id} room={room} />)
        ) : (
          <></>
        )}
      </SimpleGrid>
    </Container>
  );
}
