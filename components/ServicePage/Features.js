import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import data from '../../lib/data.json'

const ServiceFeatures = () => {
    return(
        <Box mx={{base: '0.5', md: '2', lg: '2'}} my={{base: 5, md: 10, lg: 10}}>
                {
                    data.Services.map(item => (
                        <Flex id={item.name}>
                            <Heading>
                                {item.name}
                            </Heading>

                            <Text>
                                {item.description}
                            </Text>
                        </Flex>
                    ))
                }
        </Box>
    )
}

export default ServiceFeatures