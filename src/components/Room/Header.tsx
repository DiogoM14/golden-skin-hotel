import {
  Button,
  Flex,
  Heading,
  HStack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";
import { AiOutlineShareAlt, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { api } from "../../services/apiClient";

const Header = ({ price, room_id, type, room_no }: any) => {
  const router = useRouter();

  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState();
  const { "nextauth.token": token } = parseCookies();

  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

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
      if (fav_rooms.includes(room_id)) {
        setIsLiked(true);
      }
    }
  }, [user]);

  const handleLikeChange = () => {
    if (!token) {
      router.push("/auth/login");
    } else {
      if (!isLiked) {
        api
          .put(
            `me/favRooms?room_id=${room_id}`,
            {},
            {
              headers: {
                "x-access-token": token,
              },
            }
          )
          .then(() => {
            setIsLiked(true);
          });
      } else {
        api
          .delete(`me/favRooms?room_id=${room_id}`, {
            headers: {
              "x-access-token": token,
            },
          })
          .then(() => {
            setIsLiked(false);
          });
      }
    }
  };

  return (
    <Flex
      justify='space-between'
      mt='2.3rem'
      flexDir={{ base: "column", md: "row" }}
      px={{ base: "4", sm: "0" }}>
      {!isWideVersion ? (
        <>
          <HStack justify='space-between' mb='2'>
            <Heading fontWeight='medium' fontSize='2xl'>
              Quarto {type} - {room_no}
            </Heading>
            <Button
              fontWeight='thin'
              onClick={handleLikeChange}
              leftIcon={
                !isLiked ? (
                  <AiOutlineHeart fill='#E53E3E' />
                ) : (
                  <AiFillHeart fill='#E53E3E' />
                )
              }
              variant='ghost'
              bgColor='#EFEFEF'>
              {!isLiked ? "Guardar" : "Guardado"}
            </Button>
          </HStack>
          <HStack justify='space-between'>
            <Text color='#383838'>Desde {price}€ /noite</Text>

            <Button
              fontWeight='thin'
              leftIcon={<AiOutlineShareAlt />}
              variant='ghost'
              bgColor='#EFEFEF'>
              Partilhar
            </Button>
          </HStack>
        </>
      ) : (
        <>
          <HStack>
            <Heading fontWeight='medium' fontSize='2xl'>
              Quarto {type} - {room_no}
            </Heading>
            <Text color='#383838' pl='2'>
              Desde {price}€ /noite
            </Text>
          </HStack>
          <HStack spacing='4'>
            <Button
              fontWeight='thin'
              onClick={handleLikeChange}
              leftIcon={
                !isLiked ? (
                  <AiOutlineHeart fill='#E53E3E' />
                ) : (
                  <AiFillHeart fill='#E53E3E' />
                )
              }
              variant='ghost'
              bgColor='#EFEFEF'>
              {!isLiked ? "Guardar" : "Guardado"}
            </Button>
            <Button
              fontWeight='thin'
              leftIcon={<AiOutlineShareAlt />}
              variant='ghost'
              bgColor='#EFEFEF'>
              Partilhar
            </Button>
          </HStack>
        </>
      )}
    </Flex>
  );
};

export default Header;
