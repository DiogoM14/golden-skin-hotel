import { Container, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Card } from "./Card";
import { CardsHeader } from "./CardsHeader";
import { RoomProps } from "../../utils/TRoom";
import { api } from "../../services/apiClient";

interface Props {
  haveHeader?: boolean;
  filter?: any;
  roomsList?: any;
  handlePage?: any;
}

export function CardGrid({
  haveHeader = true,
  filter,
  roomsList,
  handlePage,
}: Props) {
  const [rooms, setRooms] = useState<any>([]);

  useEffect(() => {
    if (roomsList) {
      setRooms(roomsList);
    } else {
      api.get("/rooms/filter", { params: filter }).then((res) => {
        setRooms(res.data);
        const headers = res.headers;
        if (handlePage) {
          handlePage(Number(headers["x-total-count"]));
        }
      });
    }
  }, [filter, roomsList]);

  return (
    <Container maxW='container.lg'>
      <>
        {haveHeader && <CardsHeader />}
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing='6'>
          {rooms &&
            rooms.map((room: RoomProps) => <Card key={room._id} room={room} />)}
        </SimpleGrid>
      </>
    </Container>
  );
}
