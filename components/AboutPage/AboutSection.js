import { 
    Box, 
    Text, 
    Flex, 
    HStack,
    Heading, 
    Stack, 
    Image,
    Button, 
    VStack
} from "@chakra-ui/react"
import data from '../../lib/data.json'

export default function AboutSection() {
    return(
        <>
        <Box backgroundImage={'url("/images/about-map.gif")'} p={10}>
            <Box w={'50%'} mx={'auto'} my={20}>
                <Flex alignItems={'center'} direction={'column'} justifyContent={'center'}>
                    {
                        data.About.map(item => (
                            <Text mb={10} key={item.description}>
                                {item.description}
                            </Text>
                        ))
                    }
                </Flex>
            </Box>
        </Box>
        <AboutOrg />
        <Team />
        <JoinUsToday />
        </>
    )
}

export const AboutOrg = () => {
    return(
        <>
        <HStack justifyContent={'center'} spacing={30} textAlign={'center'}>
            <Box>
                <Heading size={'4xl'}>
                    20
                </Heading>
                <Text fontSize={'2xl'}>
                    teammates
                </Text>
            </Box>

            <Box>
                <Heading size={'4xl'}>
                    10,000
                </Heading>
                <Text fontSize={'2xl'}>
                    customers
                </Text>
            </Box>
        </HStack>
        </>
    )
}

export const Team = () => {
    return(
        <>
            <Stack alignItems={'center'} justifyContent={'center'}>
                <Box w={'50%'} mx={'auto'} my={20}>
                    <Heading size={'xl'} mb={5}>TEAM</Heading>
                    <Text>
                        {data.TeamDescription.description}
                    </Text>

                    <Box mt={10}>
                        <Staff />
                    </Box>
                </Box>
            </Stack>
        </>
    )
}

export const WhatWeDo = () => {
    return(
        <Box>
            {/* icons */}
            <Heading></Heading>
        </Box>
    )
}

export const Staff = () => {
    return(
        <>
            <Image src={'/images/about-team.jpg'} alt="team profile" />
        </>
    )
}

export const JoinUsToday = () => {
    return(
        <Stack justifyContent={'center'} alignItems={'center'}>
            <Box bgColor={'rgb(44, 75, 255)'} padding={'100px'}>
                <VStack>
                    <Heading textAlign={'center'} color={'white'} w={'80%'} mb={10}>
                        Join 73,000+ growing businesses that use Wifibase to build their brands
                    </Heading>
                    <Button 
                        bgColor={'rgb(233, 114, 132)'} 
                        p={10} 
                        color={'white'}
                        _hover={{bgColor: "pink.300"}}
                        >
                        Get Started
                    </Button>
                </VStack>
            </Box>
        </Stack>
    )
}