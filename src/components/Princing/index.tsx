import { CheckIcon } from '@chakra-ui/icons';
import { Box, chakra, Flex, HStack, Icon, useColorModeValue, VStack } from '@chakra-ui/react';
import Router from 'next/router';
import React from 'react';

const Princing: React.FC = () => {

  const goToSimulator = () => {
    Router.push('/simulator')
  }

  const Feature = (props) => {
    return (
      <Flex alignSelf="start" w="full">
        <Icon
          boxSize={5}
          mt={1}
          mr={2}
          color={useColorModeValue("green.500", "gray.300")}
          viewBox="0 0 20 20"
          // fillRule="currentColor"
          as={CheckIcon}
        />
        <chakra.p
          fontSize="lg"
          color={useColorModeValue("gray.600", "gray.400")}
          {...props}
        />
      </Flex>
    );
  };
  return (
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={10}
      w="full"
      justifyContent="center"
      alignItems="center"
    >
      <Box w="full" pt={8}>
        <Flex
          direction={{ base: "column", md: "row" }}
          justifyContent="center"
          mb={{ base: 6, sm: 0 }}
        >
          <Flex
            flex={{ sm: 1, lg: "initial" }}
            w={{ lg: 2.3 / 7 }}
            rounded="lg"
            borderTopRightRadius={0}
            borderBottomLeftRadius="lg"
            bg={useColorModeValue("white", "gray.700")}
            my={6}
            direction="column"
          >
            <VStack
              spacing={1}
              justifyContent="center"
              p={8}
              textAlign="center"
              w="full"
              shadow="xl"
            >
              <chakra.span fontSize="3xl" fontWeight="bold">
                FaleMais 30
              </chakra.span>
              <HStack spacing={3}>
                <chakra.span
                  fontWeight="bold"
                  fontSize="6xl"
                  textShadow="2px 0 currentcolor"
                >
                  R$ XX
                </chakra.span>
                <chakra.span
                  alignSelf="center"
                  fontSize="3xl"
                  color={useColorModeValue("gray.400", "gray.400")}
                >
                  /mês
                </chakra.span>
              </HStack>
            </VStack>
            <VStack
              fontSize="sm"
              spacing={8}
              h="full"
              bg={useColorModeValue("gray.100", "gray.800")}
              borderBottomLeftRadius="lg"
              p={12}
            >
              <VStack
                spacing={4}
                w="full"
                direction="column"
                alignItems="start"
              >
                <Feature>30 minutos grátis</Feature>
                <Feature>todas as regiões </Feature>
              </VStack>
              <Box
                w="full"
                ml={3}
                display="inline-flex"
                rounded="md"
                shadow="md"
              >
                <chakra.a
                  w="full"
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  px={5}
                  py={3}
                  border="solid transparent"
                  fontWeight="bold"
                  rounded="md"
                  color={useColorModeValue("brand.600", "gray.100")}
                  bg={useColorModeValue("white", "gray.600")}
                  _hover={{
                    bg: useColorModeValue("brand.50", "gray.700"),
                  }}
                  cursor="pointer"
                  onClick={goToSimulator}
                >
                  Simular ligação{" "}
                </chakra.a>
              </Box>
            </VStack>
          </Flex>

          <Flex
            flex={{ base: 1, lg: "initial" }}
            w={{ lg: 2.4 / 7 }}
            rounded="lg"
            bg={useColorModeValue("white", "gray.700")}
            mt={{ base: 4, sm: -4 }}
            shadow="xl"
            zIndex={30}
            direction="column"
          >
            <VStack
              spacing={1}
              justifyContent="center"
              p={8}
              textAlign="center"
              w="full"
              shadow="xl"
            >
              <chakra.span
                fontSize="5xl"
                display={{ base: "block", lg: "inline" }}
                bgClip="text"
                bgGradient="linear(to-r, green.400,purple.500)"
                fontWeight="extrabold">
                FaleMais 60
              </chakra.span>
              <HStack spacing={3}>
                <chakra.span
                  fontWeight="bold"
                  fontSize="6xl"
                  textShadow="2px 0 currentcolor"
                >
                  R$ XX
                </chakra.span>
                <chakra.span
                  alignSelf="center"
                  fontSize="3xl"
                  color={useColorModeValue("gray.400", "gray.300")}
                >
                  /mês
                </chakra.span>
              </HStack>
            </VStack>
            <VStack
              fontSize="sm"
              h="full"
              roundedBottom="lg"
              spacing={8}
              bg={useColorModeValue("gray.100", "gray.800")}
              p={12}
            >
              <VStack
                spacing={4}
                w="full"
                direction="column"
                alignItems="start"
              >
                <Feature>60 minutos grátis</Feature>
                <Feature>todas as regiões </Feature>
              </VStack>
              <Box
                display="inline-flex"
                rounded="md"
                shadow="md"
                w="full"
              >
                <chakra.a
                  w="full"
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  px={5}
                  py={5}
                  border="solid transparent"
                  fontWeight="bold"
                  rounded="md"
                  color={useColorModeValue("brand.600", "gray.100")}
                  bg={useColorModeValue("white", "gray.600")}
                  _hover={{
                    bg: useColorModeValue("brand.200", "gray.700"),
                  }}
                  cursor="pointer"
                  onClick={goToSimulator}
                >
                  Simular ligação
                </chakra.a>
              </Box>
            </VStack>
          </Flex>

          <Flex
            flex={{ sm: 1, lg: "initial" }}
            w={{ lg: 2.3 / 7 }}
            roundedTop="lg"
            borderBottomRightRadius="lg"
            borderTopLeftRadius={0}
            bg={useColorModeValue("white", "gray.700")}
            my={6}
            direction="column"
          >
            <VStack
              spacing={1}
              justifyContent="center"
              p={8}
              textAlign="center"
              w="full"
              shadow="xl"
            >
              <chakra.span fontSize="3xl" fontWeight="bold">
                FaleMais 120
              </chakra.span>
              <HStack spacing={3}>
                <chakra.span
                  fontWeight="bold"
                  fontSize="6xl"
                  textShadow="2px 0 currentcolor"
                >
                  R$ XX
                </chakra.span>
                <chakra.span
                  alignSelf="center"
                  fontSize="3xl"
                  color={useColorModeValue("gray.400", "gray.400")}
                >
                  /mês
                </chakra.span>
              </HStack>
            </VStack>
            <VStack
              fontSize="sm"
              spacing={8}
              h="full"
              bg={useColorModeValue("gray.100", "gray.800")}
              borderBottomRightRadius="lg"
              p={12}
            >
              <VStack
                spacing={4}
                w="full"
                direction="column"
                alignItems="start"
              >
                <Feature>120 minutos grátis</Feature>
                <Feature>todas as regiões </Feature>
              </VStack>
              <Box
                w="full"
                ml={3}
                display="inline-flex"
                rounded="md"
                shadow="md"
              >
                <chakra.a
                  w="full"
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  px={5}
                  py={3}
                  border="solid transparent"
                  fontWeight="bold"
                  rounded="md"
                  color={useColorModeValue("brand.600", "gray.100")}
                  bg={useColorModeValue("white", "gray.600")}
                  _hover={{
                    bg: useColorModeValue("brand.50", "gray.700"),
                  }}
                  cursor="pointer"
                  onClick={goToSimulator}
                >
                  Simular ligação
                </chakra.a>
              </Box>
            </VStack>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Princing;