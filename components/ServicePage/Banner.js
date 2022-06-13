import { Box, Heading, Flex } from "@chakra-ui/react"

const Banner = () => {
    return(
        <Box mt={3}>
            <Flex
                justifyContent='center'
                alignItems='center'>
                <Heading 
                    fontFamily={"'Poppins', sans-serif"}>
                    Our Services
                </Heading>
            </Flex>
        </Box>
    )
}

export default Banner