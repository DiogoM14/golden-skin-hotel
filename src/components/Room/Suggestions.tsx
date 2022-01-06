import { Heading, Flex, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Card } from "../Cards/Card";
import { api } from "../../services/apiClient";

export const Suggestions = ({ type }: any) => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    api.get(`/rooms/filter?type=${type}&limit=3`).then((response) => {
      setSuggestions(response.data);
    });
  }, []);

  return (
    <Flex mb='2.3rem' flexDir='column' px={{ base: "4", sm: "0" }}>
      <Heading mb='4' fontWeight='medium' fontSize='2xl'>
        Sugestões
      </Heading>

      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing='6'>
        {suggestions.map((suggestion: any) => (
          <Card key={suggestion.id} room={suggestion} />
        ))}
      </SimpleGrid>
    </Flex>
  );
};
