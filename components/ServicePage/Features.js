import { Box, Flex, Heading, Text, Image, Stack } from '@chakra-ui/react'
import data from '../../lib/data.json'

const ServiceFeatures = () => {
    return(
        <Box mx={{base: 5, md: 5, lg: 10}} my={{base: 5, md: 10, lg: 10}}>
                {
                    data.Services.map(item => (
                        <Flex 
                            id={item.name}
                            flexDirection={{base: 'column', md: 'row', lg: 'row'}}
                            justifyContent={'center'}
                            alignItems={{base: 'center', md: 'flex-start', lg: 'flex-start'}}
                            rowGap={10}
                            columnGap={20}>
                            <Stack flex={1}>
                                <Heading
                                    fontFamily={"'Poppins', sans-serif"}
                                    textAlign={{base: 'center', md: 'left', lg: 'left'}}
                                    fontSize={{base: '2em', md: '2em', lg: '2.5em'}}
                                    mb={1.5}>
                                    {item.name}
                                </Heading>

                                <Text
                                    fontFamily={"'Poppins', sans-serif"}
                                    textAlign={'justify'}
                                    fontSize={{base: '1em', md: '1em', lg: '1em'}}>
                                    {item.description}
                                </Text>
                            </Stack>

                            <Stack mt={5} mb={10}>
                                <Image src={item.image} alt={'service-image'} 
                                    objectFit={'cover'} 
                                    boxSize={{base: 'sm', md: 'sm', lg: 'md'}}/>
                            </Stack>
                        </Flex>
                    ))
                }
        </Box>
    )
}

export default ServiceFeatures