import { Box, Text, Flex, HStack, Heading, Stack } from "@chakra-ui/react"
import data from '../../lib/data.json'

export default function AboutSection() {
    return(
        <>
        <Box backgroundImage={'url("/images/about-map.gif")'} p={10}>
            <Box w={'50%'} mx={'auto'} my={20}>
                <Flex alignItems={'center'} direction={'column'} justifyContent={'center'}>
                    {
                        data.About.map(item => (
                            <Text mb={10}>
                                {item.description}
                            </Text>
                        ))
                    }
                </Flex>
            </Box>
        </Box>
        <AboutOrg />
        <Team />
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
                    <Box>

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
        </>
    )
}