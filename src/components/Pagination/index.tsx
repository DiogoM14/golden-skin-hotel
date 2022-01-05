import { Box, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { PaginationItem } from "./PaginationItem";

type PaginationProps = {
  totalCountOfRegisters: any;
  registersPerPage?: number;
  currentPage?: number;
  handleChangePage: (page: number) => void;
};

const siblingsCount = 1;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter((page) => page > 0);
}

export function Pagination({
  totalCountOfRegisters,
  registersPerPage = 6,
  currentPage = 1,
  handleChangePage,
}: PaginationProps) {
  const [teste, setTeste] = useState(6);
  const lastPage = Math.ceil(totalCountOfRegisters / registersPerPage);

  const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : [];

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage)
        )
      : [];

  return (
    <Stack
      maxW='container.lg'
      mx='auto'
      direction={["column", "row"]}
      my='8'
      justify='space-between'
      align='center'
      spacing='6'>
      <Box>
        <strong>{(currentPage - 1) * 6}</strong> -{" "}
        <strong>
          {currentPage * registersPerPage > totalCountOfRegisters
            ? totalCountOfRegisters
            : currentPage * registersPerPage}
        </strong>{" "}
        de <strong>{totalCountOfRegisters}</strong>
      </Box>
      <Stack direction='row' spacing='2'>
        {currentPage > 1 + siblingsCount && (
          <>
            <PaginationItem handleChangePage={handleChangePage} number={1} />
            {currentPage > 2 + siblingsCount && (
              <Text color='gray.300' width='8' textAlign='center'>
                ...
              </Text>
            )}
          </>
        )}

        {previousPages.length > 0 &&
          previousPages.map((page) => {
            return (
              <PaginationItem
                handleChangePage={handleChangePage}
                key={page}
                number={page}
              />
            );
          })}

        <PaginationItem
          handleChangePage={handleChangePage}
          number={currentPage}
          isCurrent
        />

        {nextPages.length > 0 &&
          nextPages.map((page) => {
            return (
              <PaginationItem
                handleChangePage={handleChangePage}
                key={page}
                number={page}
              />
            );
          })}

        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + 1 + siblingsCount < lastPage && (
              <Text color='gray.300' width='8' textAlign='center'>
                ...
              </Text>
            )}
            <PaginationItem
              handleChangePage={handleChangePage}
              number={lastPage}
            />
          </>
        )}
      </Stack>
    </Stack>
  );
}
