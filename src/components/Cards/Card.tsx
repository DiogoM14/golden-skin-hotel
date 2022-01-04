import {
  Image,
  Box,
  Heading,
  Text,
  Button,
  IconButton,
  Flex,
  Spacer,
  Spinner,
} from "@chakra-ui/react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { RoomProps } from "../../utils/TRoom";
import NextLink from "next/link";
import { api } from "../../services/apiClient";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useRooms } from "../../hooks/useRooms";

type Room = {
  room: RoomProps;
};

export function Card({ room }: Room) {
  const { isLoading, isFetching } = useRooms()
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState();
  const { "nextauth.token": token } = parseCookies();
  const router = useRouter();

  useEffect(() => {
    if (token) {
      api
        .get("/me/myInfo", {
          headers: {
            "x-access-token": token,
          },
        })
        .then((res) => {
          setUser(res.data);
        });
    }
  }, [isLiked]);

  useEffect(() => {
    if (user) {
      const { fav_rooms }: any = user;
      if (fav_rooms.includes(room._id)) {
        setIsLiked(true);
      }
    }
  }, [user]);

  const handleLike = () => {
    if (!token) {
      router.push("/auth/login");
    } else {
      if (!isLiked) {
        api
          .put(
            `me/favRooms?room_id=${room._id}`,
            {},
            {
              headers: {
                "x-access-token": token,
              },
            }
          )
          .then((res) => {
            setIsLiked(true);
          });
      } else {
        api
          .delete(`me/favRooms?room_id=${room._id}`, {
            headers: {
              "x-access-token": token,
            },
          })
          .then((res) => {
            setIsLiked(false);
          });
      }
    }
  };

  return (
    <Box borderRadius='lg' overflow='hidden' position='relative' boxShadow='md'>
      <IconButton
        onClick={handleLike}
        aria-label='Bookmark room'
        position='absolute'
        top='3'
        right='3'
        zIndex='1'
        size='sm'
        icon={
          !isLiked ? (
            <AiOutlineHeart fill='#E53E3E' />
          ) : (
            <AiFillHeart fill='#E53E3E' />
          )
        }
      />

      <Image
        maxH='200px'
        h='100%'
        width='100%'
        src={room.images[0]}
        objectFit='cover'
      />

      <Box p='4' bgColor='white'>
        <Flex mb='4' alignItems='center'>
          <Heading as='h6' fontSize='xl' fontWeight='md'>
            Quarto {room.type}
            { !isLoading && isFetching && <Spinner size="sm" color="#F2BB05" ml="4" /> }
          </Heading>
          <Spacer />
          <Text color='gray.500' fontSize='sm'>
            {room.area}m&sup2;
          </Text>
        </Flex>
        <Flex alignItems='center'>
          <Flex>
            <Text fontSize='sm' fontWeight='bold' color='gray.900'>
              {room.price_night}€
            </Text>
            <Text fontSize='sm' color='gray.500'>
              / noite
            </Text>
          </Flex>
          <Spacer />
          <NextLink href={`/room/${room._id}`}>
            <Button
              fontFamily='Poppins'
              fontWeight='Medium'
              bgColor='white'
              border='2px'
              borderColor='#F2BB05'
              size='sm'
              _hover={{ bgColor: "#EDF2F7" }}>
              Ver Mais
            </Button>
          </NextLink>
        </Flex>
      </Box>
    </Box>
  );
}
