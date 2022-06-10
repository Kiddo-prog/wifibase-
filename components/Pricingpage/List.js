import { Box, Flex, Heading, Text, HStack, Button } from "@chakra-ui/react"
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

            {/* Pricing list */}
        <Heading textAlign={'center'}>Choose your Modem</Heading>
            <Box>
                <ModemList />
            </Box>
        </>
    )
}


export const ModemList = () => {
    return(
        <Box>
            <Flex alignItems={'center'} justifyContent={'space-around'} flexDirection={'row'}>
                {data.Modem.map((item) => (
                    <Box key={item.name}>
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
                        <Button as={'a'} href='/register'>Get Started</Button>
                        <Box>
                            {
                                item.features.map((feature) => (
                                    <Box key={feature}>
                                        <Text>{feature}</Text>
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
