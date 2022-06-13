import { Box, Image, Flex, Heading } from "@chakra-ui/react"

export default function Banner() {
    return(
        <Box bgColor={'rgb(238, 157, 171)'} p={20}>
            <Flex alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
                <Heading mb={10} fontFamily={"'Poppins', sans-serif"} letterSpacing={1}>
                    About Us
                </Heading>
                <Image src="/images/about_wifibase2.png" alt={'wifibase profile'} objectFit={'contain'} />
            </Flex>
        </Box>
    )
}