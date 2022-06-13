import { 
    Box, 
    Text, 
    Flex, 
    Heading, 
    Stack, 
    Image,
    Button, 
    VStack
} from "@chakra-ui/react"
import data from '../../lib/data.json'
import { TiTick } from 'react-icons/ti'

export default function AboutSection() {
    return(
        <>
            <Box 
                backgroundImage={'url("/images/about-map.gif")'} 
                backgroundRepeat={'no-repeat'}
                backgroundSize={'contain'} 
                backgroundPosition={'center'} 
                p={10}>
                <Box w={{base: '100%', md: '100%', lg: '50%'}} mx={'auto'} my={20}>
                    <Flex alignItems={'center'} direction={'column'} justifyContent={'center'}>
                        {
                            data.About.map(item => (
                                <Text 
                                    mb={10} 
                                    key={item.description}
                                    fontFamily={"'Poppins', sans-serif"}
                                    lineHeight={6}>
                                    {item.description}
                                </Text>
                            ))
                        }
                    </Flex>
                </Box>
            </Box>
            <AboutOrg />
            <Team />
            <Values />
            <JoinUsToday />
        </>
    )
}

export const AboutOrg = () => {
    return(
        <>
        <Flex 
            justifyContent={'center'} 
            spacing={'5em'} 
            textAlign={'center'} 
            rowGap={5} 
            columnGap={5} 
            flexDirection={{
                base: 'column', 
                md: 'row', 
                lg: 'row'}}
            >
            <Box>
                <Heading 
                    fontFamily={"'Poppins', sans-serif"} 
                    color={'pink.600'} 
                    fontSize={{
                        base: '2.5em', 
                        md: '3em', 
                        lg: '4em'
                    }}>
                    20
                </Heading>
                <Text fontFamily={"'Poppins', sans-serif"} textTransform={'capitalize'} fontSize={{base: '1em', md: '1.2em', lg: '1.4em'}}>
                    teammates
                </Text>
            </Box>

            <Box>
                <Heading fontFamily={"'Poppins', sans-serif"} color={'green'} fontSize={{base: '2.5em', md: '3em', lg: '4em'}}>
                    10,000
                </Heading>
                <Text fontFamily={"'Poppins', sans-serif"} textTransform={'capitalize'} fontSize={{base: '1em', md: '1.2em', lg: '1.4em'}}>
                    customers
                </Text>
            </Box>
        </Flex>
        </>
    )
}

export const Team = () => {
    return(
        <>
            <Stack alignItems={'center'} justifyContent={'center'} mx={5}>
                <Box w={{base: '100%', md: '100%', lg: '50%'}} my={20}>
                    <Heading size={'xl'} mb={5}>TEAM</Heading>
                    <Text
                        fontFamily={"'Poppins', sans-serif"}
                        lineHeight={7}>
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

export const Values = () => {
    return(
        <Stack alignItems={'center'} justifyContent={'center'} mx={5}>
        <Box w={{base: '100%', md: '100%', lg: '50%'}} my={20}>
            <Heading fontFamily={"'Poppins', sans-serif"} mb={5}>Our values</Heading>
            {
                data.Values.map((item, index) => (
                    <Text fontFamily={"'Poppins', sans-serif"} lineHeight={7} mb={5} key={index}>{item}</Text>
                ) )
            }
            <WhatWeDo />
        </Box>
        </Stack>
    )
}

export const WhatWeDo = () => {
    return(
        <Stack alignItems={'flex-start'} justifyContent={'center'} mx={5} spacing={5}>
            {
                data.WhatWeDo.map((item, index) => (
                    <Flex key={index} alignItems={'flex-start'} columnGap={5}>
                      <Text as={'span'} border={'1px solid #000'} fontFamily={"'Poppins', sans-serif"} p={2} color={'black'} textAlign={'left'} bgColor={'white'}>
                       <TiTick  />
                      </Text>
                        <Text>{item}</Text>
                    </Flex>
                ))
            }
            <Text></Text>
        </Stack>
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
            <Box bgColor={'rgb(44, 75, 255)'} padding={12}>
                <VStack>
                    <Heading 
                        textAlign={'center'} 
                        color={'white'} 
                        w={{base: '100%', md: '80%', lg: '80%'}} 
                        mb={10}
                        fontFamily={"'Poppins', sans-serif"}
                        fontSize={{base: '1em', md: '1.5em', lg: '2em'}}
                        lineHeight={'1.5em'}>
                        Join 73,000+ growing businesses that use Wifibase to build their brands
                    </Heading>
                    <Button 
                        bgColor={'rgb(233, 114, 132)'} 
                        p={10} 
                        color={'white'}
                        _hover={{bgColor: "pink.300"}}
                        >
                        Get started now
                    </Button>
                </VStack>
            </Box>
        </Stack>
    )
}