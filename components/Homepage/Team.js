import { Heading } from "@chakra-ui/react"
import { Flex, Box, Image, Text, Button, Spacer } from "@chakra-ui/react"
import data from '../../lib/data.json'
import { JoinUsToday } from "../AboutPage/AboutSection"

export default function Team() {
    return(
        <>
        <Box>
            <Flex 
                flexDirection={{base: 'column-reverse', md: 'row', lg: 'row'}}
                alignItems={'center'}
                textAlign={{base: 'center', md: 'left', lg: 'left'}}
                mt={20}
            >
                    <Box flex={5}>
                    <Image
                        flex={5} 
                        src={'/images/wifibase-team.jpg'} 
                        alt={'our-team'} />
                    </Box>
                    <Spacer />
                    <Box 
                        flex={5}
                        mb={10}>
                        <Heading
                            fontFamily={"'Poppins', sans-serif"}
                            as={'h3'}
                            size={'lg'}
                            fontWeight={800}
                            mb={10}
                        >
                            And we are here to help
                        </Heading>
                        <Text
                            fontSize={{base: '1em', md: '0.7em', lg: '0.9em'}}
                            fontFamily={"'Poppins', sans-serif"}
                            lineHeight={{base: 2, md: 8, lg: 8}}
                        >
                            {data.CustomerDescription}
                        </Text>  
                        <Button
                            border={'1px solid rgb(44, 75, 255)'} 
                            color={'rgb(44, 75, 255)'}
                            fontFamily={"'Poppins', sans-serif"}
                            mt={10}
                            backgroundColor={'white'}
                            fontWeight={300}
                            size={{base: 'md', md: 'lg', lg: 'lg'}}
                            textAlign={'center'}
                        >
                            Visit our help center
                        </Button>
                    </Box>
                </Flex>

            <Box marginTop={'10em'} marginBottom={'10em'}>
                <JoinUsToday />
            </Box>
            </Box>
            </>
    )
}