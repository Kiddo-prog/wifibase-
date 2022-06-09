import { 
    Stack, 
    Box, 
    Heading, 
    Text, 
    Image, 
    Flex, 
    Button, 
    HStack } from '@chakra-ui/react'
import data from '../../lib/data.json'

export default function Features(){
    return(
        <Stack>
            <Box>
                {
                    data.Features.map((features, index) => (
                        <Box key={index}>
                            <Flex justifyContent={'space-around'}>
                                <Box>
                                    <Heading>{features.heading}</Heading>
                                    <Text>{features.description}</Text>
                                    <HStack mt={2}>
                                        <Button as={'a'} href={'/register'}>Get started</Button>
                                        <Button as={'a'} href={'/services'}>Learn More</Button>
                                    </HStack>
                                </Box>
                                <Image src={features.image} alt={'features'} objectFit={'cover'} boxSize={'md'} />
                            </Flex>
                        </Box>
                    ))
                }
            </Box>

                    <HStack spacing={10} justifyContent={'space-around'}>
                        {
                            data.Business.map((business, index) => (
                                <Box key={index}>
                                        <Box>
                                            <Heading size={'2xl'}>{business.fig}</Heading>
                                            <Text textAlign={'center'} mt={4}>{business.info}</Text>
                                        </Box>
                                </Box>
                            ))
                        }
                    </HStack>
        </Stack>
    )
}