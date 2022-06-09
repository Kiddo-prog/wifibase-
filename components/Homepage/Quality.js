import { Heading, Text, Flex, Box } from "@chakra-ui/react";

export default function QualityDetails(){
    return (
        <Flex alignItems={'center'} justifyContent={'center'}>
            <Box maxW={{base: '', md: '50%', lg: '50%'}}>
                <Heading textAlign={'center'}>
                    Your personal speed &#38; <br />
                    Your quality home connection
                </Heading>
                
                <Text textAlign={'center'}>
                    We offer the best internet speed here at Smart Technologies. So far, our clients have proven to trust our services and have given us positive feedbacks concerning this.
                </Text>
            </Box>
        </Flex>
    )
}