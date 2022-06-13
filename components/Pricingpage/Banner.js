import { Heading, Box, Text, Stack, Flex } from "@chakra-ui/react"

export default function PricingBanner(){
    return(
            <Stack justifyContent={'center'} alignItems={'center'} flexDirection={'column'} marginX={{base: 10, md: 10, lg: 0}}>
                <Box w={{base: '100%', md: '100%', lg: '50%'}} my={15}>
                    <Heading fontFamily={"'Poppins', sans-serif"} textAlign={'center'} fontWeight={'bold'} mb={5}>
                        Browser Flawlessly. Subscribe Effortlessly. Interact Authentically.
                    </Heading>
                    <Text fontFamily={"'Poppins', sans-serif"} textAlign={'center'} fontSize={{base: '0.9em', md: '1em', lg: '1em'}}>
                        We&lsquo;ve built simpler network modem for busy people. Enjoy our free plan as you get started, or trial our full toolkit priced to make browsing on social affordable.
                    </Text>
                </Box>
            </Stack>
    )
}