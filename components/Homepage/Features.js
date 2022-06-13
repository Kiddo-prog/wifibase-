import { 
    Stack, 
    Box, 
    Heading, 
    Text, 
    Image, 
    Flex, 
    Button, 
    HStack,
    Spacer
 } from '@chakra-ui/react'
import data from '../../lib/data.json'

export default function Features(){
    return(
        <>
            <Box marginX={'2em'}>
                {
                    data.Features.map((features, index) => (
                            <Flex 
                                key={features.description}
                                justifyContent={'space-around'}
                                flexDirection={{base: 'column', md: 'row', lg: 'row'}}
                                marginX={20}
                                marginY={20}
                                _even={{
                                    sm: {flexDirection: 'row-reverse', flexWrap: 'wrap'},
                                    md: {flexWrap: 'nowrap', flexDirection: 'column'}, 
                                    lg: {flexWrap: 'nowrap', flexDirection: 'column'}
                                }}
                                 >
                                <Box marginX={{base: 5, md: 7, lg: 10}}>
                                    <HStack >
                                        <Heading
                                            fontFamily={"'Poppins', sans-serif"}
                                            color={'rgb(44, 75, 255)'}
                                            fontSize={{base: '0.8em', md: '1.2em', lg: '1.6em'}}>
                                            {++index}.
                                        </Heading>
                                        <Heading 
                                            fontFamily={"'Poppins', sans-serif"}
                                            color={'rgb(44, 75, 255)'}
                                            fontSize={{base: '0.8em', md: '1.2em', lg: '1.6em'}}>
                                            {features.heading}
                                        </Heading>
                                    </HStack>
                                        <Text 
                                            fontFamily={"'Poppins', sans-serif"}
                                            mt={5}
                                            fontSize={{base: '0.7em', md: '0.8em', lg: '1em'}}>
                                            {features.description}
                                        </Text>
                                    <Flex
                                        mt={10}
                                        flexDirection={{base: 'column', md: 'row', lg: 'row'}}
                                        >
                                        <Button 
                                            as={'a'} 
                                            href={'/register'} 
                                            bgColor={'rgb(44, 75, 255)'} 
                                            color={'white'} 
                                            _hover={{bgColor: 'blue'}}
                                            fontFamily={"'Poppins', sans-serif"}
                                            letterSpacing={1}
                                            mx={{base: 0, md: 5, lg: 5}}
                                            fontSize={{base: '0.7em', md: '0.8em', lg: '1em'}}
                                            w={{base: '100%', md: 'auto', lg: 'auto'}}
                                            mb={5}
                                            >
                                                Get started now
                                        </Button>
                                        <Button 
                                            as={'a'} 
                                            href={'/services'} 
                                            border={'1px solid rgb(44, 75, 255)'} 
                                            color={'rgb(44, 75, 255)'}
                                            fontFamily={"'Poppins', sans-serif"}
                                            fontSize={{base: '0.7em', md: '0.8em', lg: '1em'}}
                                            >
                                                Learn More
                                            </Button>
                                    </Flex>
                                </Box>
                                <Image 
                                    src={features.image} 
                                    alt={'features'} 
                                    objectFit={'cover'} 
                                    boxSize={{base: 'md', md: 'md', lg: 'lg'}} />
                            </Flex>
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
        </>
    )
}