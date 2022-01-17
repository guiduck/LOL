import { Box, Button, Container, Flex, Heading, Radio, RadioGroup, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import useApi from '../../src/hooks/useApi';

const simulator: React.FC = () => {

  const [origin, setOrigin] = useState('0')
  const [destiny, setDestiny] = useState('0')

  const [priceKey, setPriceKey] = useState(0)
  const [price, setPrice] = useState(0)

  const { response: pricingData, error } = useApi('/origin')

  const pricing = (origin, destiny) => {
    //use selected origin and compare to array of pricingData to calculate spending
    if (pricingData) {
      const prices = pricingData.map(item => (item.destiny.map((v, index) => index == destiny ? Object.values(v) : null)))
      const keys = pricingData.map(item => (item.destiny.map(k => Object.keys(k))))

      setPrice(prices[origin].find((p, index) => destiny == index ? p : null))
      console.log(prices, keys)
    }
  }

  useEffect(() => {
    pricing(origin, destiny)

    console.log(price)
  }, [origin, destiny])

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
                <Radio value='0'>011</Radio>
                <Radio value='1'>016</Radio>
                <Radio value='2'>017</Radio>
                <Radio value='3'>018</Radio>
              </Stack>
            </RadioGroup>
            <RadioGroup onChange={setDestiny} value={destiny}>
              <Stack direction='column'>
                <Radio value='0'>011</Radio>
                <Radio value='1'>016</Radio>
                <Radio value='2'>017</Radio>
                <Radio value='3'>018</Radio>
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