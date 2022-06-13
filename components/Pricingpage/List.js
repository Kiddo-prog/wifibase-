import { Box, Flex, Heading, Text, HStack, Button, Stack } from "@chakra-ui/react"
import data from '../../lib/data.json'
import { TiTick } from 'react-icons/ti'

export default function PricingList(){
    return(
        <>
            <Heading textAlign={'center'} fontFamily={"'Poppins', sans-serif"} my={10}>Choose your Modem</Heading>
            <Box>
                <ModemList />
            </Box> 
        </>
    )
}


export const ModemList = () => {
    return(
        <Box marginX={{lg: 10}} mb={10}>
            <Flex alignItems={'flex-start'} justifyContent={'center'} flexDirection={'row'} flexWrap={{base: 'wrap', md: 'wrap', lg: 'nowrap'}} rowGap={5}>
                {data.Modem.map((item) => (
                    <Box key={item.name} borderWidth={2} p={10} m={5} bgColor={'white'} fontFamily={"'Poppins', sans-serif"}>
                        <Heading size={'lg'} fontWeight={'700'} mb={4}>
                            {item.name}
                        </Heading>
                        <Text color={'gray.500'} mb={6}>
                            {item.desc}
                        </Text>
                        <HStack alignItems={'flex-start'} spacing={10}>
                            <Heading size={{base: 'lg', md: '2xl', lg: '3xl'}} fontWeight={'700'}>
                                <Text as={'sup'} fontSize={'lg'}>$</Text>
                                    {item.price} 
                            </Heading>
                        </HStack>
                        <Text fontWeight={'500'} fontSize={'0.9em'} mt={5}>
                            {item.desc_features}
                        </Text>
                        <Button 
                            as={'a'} 
                            href='/register' w={'100%'} 
                            bgColor={'rgb(44, 75, 255)'} 
                            color={'white'}
                            _hover={{bgColor: 'blue'}}
                            fontWeight={'400'}
                            my={5}
                        >
                            Get Started
                        </Button>
                        <Box>
                            {
                                item.features.map((feature) => (
                                    <Box key={feature}>
                                        <Flex rowGap={10} columnGap={5}>
                                            <Text>
                                                <TiTick />
                                            </Text>

                                            <Text>
                                                {feature}
                                            </Text>
                                        </Flex>
                                    </Box>
                                ))
                            }
                        </Box>
                    </Box>
                ))}
            </Flex>
        </Box>
    )
}
