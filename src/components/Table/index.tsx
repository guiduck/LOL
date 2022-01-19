import { chakra, Flex, SimpleGrid, Stack, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

type Props = {
  total: number,
  noPlan: number,
  userPlan: string,
  duration: string
}

const Table: React.FC<Props> = ({total, noPlan, userPlan, duration}) => {
  return (
    <Flex
      w="full"
      bg="gray.600"
      alignItems="center"
      justifyContent="center"
      shadow='2xl'
      mt={6}
    >
      <Stack
        direction={{ base: "column" }}
        w="full"
        bg={{ md: useColorModeValue("white", "gray.800") }}
        shadow="2xl"
      >
        <Flex
          w='full'
          direction={{ base: "row", md: "column" }}
          bg={useColorModeValue("white", "gray.800")}
        >
            <SimpleGrid
              spacingY={3}
              columns={{ base: 1, md: 3 }}
              w={{ base: 120, md: 'full'}}
              textTransform="uppercase"
              bg={useColorModeValue("gray.100", "gray.700")}
              color={useColorModeValue("gray.500", "gray.200")}
              py={{ base: 1, md: 4 }}
              px={{ base: 2, md: 10 }}
              fontSize="md"
              fontWeight="hairline"
              display="table-header-group"
            >
              <span>Plan</span>
              <span>Duration</span>
              <chakra.span textAlign={{ md: "right" }}>Cost</chakra.span>
            </SimpleGrid>

          <SimpleGrid
            spacingY={3}
            columns={{ base: 1, md: 3 }}
            w="full"
            py={2}
            px={10}
            fontWeight="hairline"
          >
            <span>{userPlan}</span>
            <chakra.span
              textOverflow="ellipsis"
              overflow="hidden"
              whiteSpace="nowrap"
            >
              {duration}
            </chakra.span>
            <Flex justify={{ md: "end" }}>
              {String(total).slice(0, 4)}
            </Flex>
          </SimpleGrid>

          <SimpleGrid
            spacingY={3}
            columns={{ base: 1, md: 3 }}
            w="full"
            py={2}
            px={10}
            fontWeight="hairline"
          >
            <span>no Plan</span>
            <chakra.span
              textOverflow="ellipsis"
              overflow="hidden"
              whiteSpace="nowrap"
            >
              {duration}
            </chakra.span>
            <Flex justify={{ md: "end" }}>
              {noPlan}
            </Flex>
          </SimpleGrid>
        </Flex>
      </Stack>
    </Flex>
  )
}

export default Table;