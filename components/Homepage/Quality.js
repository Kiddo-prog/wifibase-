import { Heading, Text, Flex, Box } from "@chakra-ui/react";

export default function QualityDetails(){
    return (
        <Flex alignItems={'center'} justifyContent={'center'}>
            <Box maxW={{base: '', md: '50%', lg: '50%'}}>
                <Heading 
                    textAlign={'center'}
                    fontSize={[18, 28, 35]}
                    fontFamily={"'Poppins', sans-serif"} 
                    lineHeight="2.75rem"
                >
                    Your quality home connection
                </Heading>
                
                <Text 
                    textAlign={'center'}
                    fontFamily={"'Poppins', sans-serif"}
                    fontSize={{base: '0.7em', md: '0.9em', lg: '1em'}}
                    mt={5}
                >
                    We offer the best internet speed here at Smart Technologies. So far, our clients have proven to trust our services and have given us positive feedbacks concerning this.
                </Text>
            </Box>
        </Flex>
    )
}