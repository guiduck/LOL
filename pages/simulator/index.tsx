import { Box, Button, Container, Flex, Heading, Radio, RadioGroup, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import useApi from '../../src/hooks/useApi';

const simulator: React.FC = () => {

  const [origin, setOrigin] = React.useState('11')
  const [destiny, setDestiny] = React.useState('11')

  const { response: pricingData, error } = useApi('/origin')
  console.log(pricingData)

  const pricing = (origin, destiny) => {
    //use selected origin and compare to array of pricingData to calculate spending
    const destinyPrices = pricingData.filter(p => p == origin)
    const price = destinyPrices.filter(p => p == destiny)

    if (!price) {

    }
  }

  return (
    <Container justifyContent='center' alignItems='center'>
      <Box mt={[10, 0]} p={30} bg={useColorModeValue("gray.200", "gray.600")} rounded='lg' boxShadow='lg' >
        <Flex display='column'   >
          <Box px={[4, 0]} pb={5}>
            <Heading fontSize="lg" fontWeight="medium" lineHeight="6">
              Calculadora de plano
            </Heading>
            <Text
              mt={1}
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              Escolha o ddd de origem e destino para calcular o valor da ligação
            </Text>
          </Box>
          <Flex gap={20}>
            <RadioGroup onChange={setOrigin} value={origin}>
              <Stack direction='column'>
                <Radio value='011'>011</Radio>
                <Radio value='016'>016</Radio>
                <Radio value='017'>017</Radio>
                <Radio value='018'>018</Radio>
              </Stack>
            </RadioGroup>
            <RadioGroup onChange={setDestiny} value={destiny}>
              <Stack direction='column'>
                <Radio value='011'>011</Radio>
                <Radio value='016'>016</Radio>
                <Radio value='017'>017</Radio>
                <Radio value='018'>018</Radio>
              </Stack>
            </RadioGroup>
          </Flex>

          <Flex pt={5}>
            <Button
              type="submit"
              colorScheme="teal"
              _focus={{ shadow: "" }}
              fontWeight="md"
            >
              Test
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Container>
  )
}

export default simulator;