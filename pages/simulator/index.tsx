import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  Heading,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Table from '../../src/components/Table';
import useApi from '../../src/hooks/useApi';

const simulator: React.FC = () => {

  const [origin, setOrigin] = useState('0')
  const [destiny, setDestiny] = useState('0')

  const [userPlan, setUserPlan] = useState('30')
  const [duration, setDuration] = useState('30')

  const [priceKey, setPriceKey] = useState(0)
  const [price, setPrice] = useState(0)
  const [total, setTotal] = useState(0)
  const [noPlan, setNoPlan] = useState(0)

  const { response: pricingData, error } = useApi('/origin')

  const calculatePrice = (price, duration, userPlan) => {
    if (duration <= 30 && userPlan == 30) {
      if (price != null) {
        setTotal(0)
      } else {
        setTotal(0)
      }
    } else if (duration > 30 && userPlan == 30) {
      if (price != null) {
        setTotal((price * (duration - 30) * 1.1))
      } else {
        setTotal(0)
      }
    } else if (duration <= 60 && userPlan == 60) {
      if (price != null) {
        setTotal(0)
      } else {
        setTotal(0)
      }
    } else if (duration > 60 && userPlan == 60) {
      if (price != null) {
        setTotal((price * (duration - 60) * 1.1))
      } else {
        setTotal(0)
      }
    } else if (duration <= 120 && userPlan == 120) {
      if (price != null) {
        setTotal(0)
      } else {
        setTotal(0)
      }
    } else if (duration > 120 && userPlan == 120) {
      if (price != null) {
        setTotal((price * (duration - 120) * 1.1))
      } else {
        setTotal(0)
      }
    }
    //get total price of noPlan
    if (price && duration) {
      setNoPlan(parseInt(duration) * price)
    }
  }

  const pricing = (origin, destiny) => {
    //use selected origin and compare to array of pricingData to calculate spending
    if (pricingData) {
      const prices = pricingData.map(item => (item.destiny.map((v, index) => index == destiny ? Object.values(v) : null)))
      const keys = pricingData.map(item => (item.destiny.map(k => Object.keys(k))))

      const p = (prices[origin].find((p, index) => destiny == index ? p : null))
      setPrice(p[0])
    }
  }

  useEffect(() => {
    pricing(origin, destiny)

    console.log(price, userPlan, duration, total, noPlan)
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

          <Flex direction='column'>
            <Text
              mt={1}
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              Selecione o tempo da ligação(em minutos) e o plano FaleMais desejado
            </Text>
            <FormControl>
              <Select
                id="plan"
                name="plan"
                autoComplete="plan"
                placeholder="Select option"
                mt={5}
                focusBorderColor="brand.400"
                shadow="sm"
                size="sm"
                w="full"
                rounded="md"
                value={userPlan}
                onChange={(e) => setUserPlan(e.target.value)}
              >
                <option value={30}>FaleMais 30</option>
                <option value={60}>FaleMais 60</option>
                <option value={120}>FaleMais 120</option>
              </Select>
            </FormControl>
            <NumberInput
                onChange={(valueString) => setDuration(valueString)}
                value={duration}
                max={300}
                mt={5}
              >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Flex>

          <Flex pt={5}>
            <Button
              type="submit"
              colorScheme="teal"
              _focus={{ shadow: "" }}
              fontWeight="md"
              onClick={() => calculatePrice(price, duration, userPlan)}
            >
              Calcular
            </Button>
          </Flex>
        </Flex>
        <Table total={total} noPlan={noPlan} userPlan={userPlan} duration={duration} />
      </Box>

    </Container>
  )
}

export default simulator;