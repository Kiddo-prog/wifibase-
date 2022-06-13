import { Heading, Box, Text, Stack } from "@chakra-ui/react"

export default function PricingBanner(){
    return(
            <Stack justifyContent={'center'} flexDirection={'column'} overFlow={'hidden'}>
                <Box w={{base: '100%', md: "100%", lg: '50%'}} mx={{base: 5, md: 5, lg: 'auto'}}>
                    <Heading fontFamily={"'Poppins', sans-serif"} textAlign={'center'} fontWeight={'bold'} mb={5}>
                        Browser Flawlessly. Subscribe Effortlessly. Interact Authentically.
                    </Heading>
                    <Text fontFamily={"'Poppins', sans-serif"} textAlign={'center'}>
                        We&lsquo;ve built simpler network modem for busy people. Enjoy our free plan as you get started, or trial our full toolkit priced to make browsing on social affordable.
                    </Text>
                </Box>
            </Stack>
    )
}