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
                                flexDirection={{base: 'column', md: 'column', lg: 'row'}}
                                alignItems={'center'}
                                marginX={{base: 5, md: 5, lg: 10}}
                                marginY={20}
                                _even={{
                                    sm: {flexDirection: 'row-reverse', flexWrap: 'wrap'},
                                    md: {flexWrap: 'nowrap', flexDirection: 'column'}, 
                                    lg: {flexWrap: 'nowrap', flexDirection: 'column'}
                                }}
                                 >
                                <Box marginX={{base: 2, md: 7, lg: 10}}>
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
                                            fontSize={{base: '1.2em', md: '1.2em', lg: '1em'}}>
                                            {features.description}
                                        </Text>
                                    <Flex
                                        mt={10}
                                        flexDirection={{base: 'column', md: 'column', lg: 'row'}}
                                        rowGap={5}
                                        columnGap={5}
                                        >
                                        <Button 
                                            as={'a'} 
                                            href={'/register'} 
                                            bgColor={'rgb(44, 75, 255)'} 
                                            color={'white'} 
                                            _hover={{bgColor: 'blue'}}
                                            fontFamily={"'Poppins', sans-serif"}
                                            letterSpacing={1}
                                            fontSize={{base: '0.7em', md: '0.8em', lg: '1em'}}
                                            w={{base: '100%', md: 'auto', lg: 'auto'}}
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
                                    boxSize={{base: 'sm', md: 'md', lg: 'lg'}} />
                            </Flex>
                    ))
                }
            </Box>

                    <Flex
                        justifyContent={'space-around'}
                        alignItems={'center'}
                        alignContent={'center'}
                        flexDirection={{base: 'column', md: 'row', lg: 'row'}}>
                        {
                            data.Business.map((business) => (
                                <Box key={business.fig}>
                                        <Box mb={5}>
                                            <Heading 
                                                size={'2xl'}
                                                fontSize={{base: '2em', md: '2em', lg: '2.5em'}}
                                                fontFamily={"'Poppins', sans-serif"}
                                                textAlign={'center'}
                                                color={'rgb(44, 75, 255)'}
                                                fontWeight={800}
                                                letterSpacing={2}
                                                >{business.fig}</Heading>
                                            <Text 
                                                textAlign={'center'} 
                                                mt={4}
                                                fontSize={{base: '1em', md: '0.8em', lg: '1em'}}
                                                fontFamily={"'Poppins', sans-serif"}
                                                textTransform={'capitalize'}>
                                                    {business.info}
                                            </Text>
                                        </Box>
                                </Box>
                            ))
                        }
                    </Flex>
        </>
    )
}