import { Box, Flex, Heading, Text, HStack, Button, Stack } from "@chakra-ui/react"
import data from '../../lib/data.json'

export default function PricingList(){
    return(
        <>
        <Box 
            backgroundImage={"url('images/pricing_b.jpg')"} 
            backgroundSize={'cover'} 
            backgroundPosition={'center'} 
            backgroundRepeat={'no-repeat'}
            width={'100%'} 
            height={'500px'}
            mt={'5em'}
            >
        </Box>
        <Heading textAlign={'center'}>Choose your Modem</Heading>
            <Box 
            //  backgroundImage={"url('images/pricing_b.jpg')"} 
            //  backgroundSize={'cover'} 
            //  backgroundPosition={'center'} 
            //  backgroundRepeat={'no-repeat'}
            //  width={'100%'} 
            //  height={'500px'}
            //  mt={'5em'}
             >
                <ModemList />
            </Box>
        </>
    )
}


export const ModemList = () => {
    return(
        <Box>
            <HStack alignItems={'flex-start'} justifyContent={'space-around'} flexDirection={'row'} spacing={3}>
                {data.Modem.map((item) => (
                    <Box key={item.name} borderWidth={2} p={10} m={5}>
                        <Heading size={'lg'}>
                            {item.name}
                        </Heading>
                        <Text>
                            {item.desc}
                        </Text>
                        <HStack alignItems={'flex-start'} spacing={10}>
                            <Heading size={'2xl'} fontWeight={'bold'}>
                                <Text as={'sup'} fontSize={'lg'}>$</Text>{item.price} 
                            </Heading>
                        </HStack>
                        <Text>
                            {item.desc_features}
                        </Text>
                        <Button 
                            as={'a'} 
                            href='/register' w={'100%'} 
                            bgColor={'rgb(44, 75, 255)'} 
                            color={'white'}
                            _hover={{bgColor: 'blue'}}
                        >
                            Get Started
                        </Button>
                        <Box>
                            {
                                item.features.map((feature) => (
                                    <Box key={feature}>
                                        <HStack>
                                            <Text as={'span'}>
                                                <svg xmlns="http://www.w3.org/2000/svg" 
                                                    width="24" 
                                                    height="24" 
                                                    viewBox="0 0 24 24"
                                                    fill="black"
                                                    >
                                                        <path d="M22 2v20h-20v-20h20zm2-2h-24v24h24v-24zm-5.541 
                                                                8.409l-1.422-1.409-7.021 7.183-3.08-2.937-1.395 
                                                                1.435 4.5 4.319 8.418-8.591z"/>
                                                </svg>
                                            </Text>

                                            <Text>
                                                {feature}
                                            </Text>
                                        </HStack>
                                    </Box>
                                ))
                            }
                        </Box>
                    </Box>
                ))}
            </HStack>
        </Box>
    )
}
