import { 
  Stack, 
  Text, 
  Heading, 
  Button, 
  Image, 
  HStack, 
  Box,
  Flex 
} from "@chakra-ui/react"

export default function Banner(){
    return(
        <Stack>
            <Flex alignItems={'flex-start'} justifyContent={'space-around'}>
              <Box>
                <Heading>FAST AND SECURED NETWORK TO YOUR DOORSTEP</Heading>
                <Text>Wifispace is one of the best network service provider in whole of nigeria.</Text>
                <HStack>
                  <Button as={'a'} href={'/register'}>Get Started</Button>
                  <Button as={'a'} href={'#'}>Learn More</Button>
              </HStack>
              </Box>
                <Image src={'/images/mobile.png'} alt={'person with mobile'} objectFit={'cover'} boxSize={'md'}/>
            </Flex>
          </Stack>
    )
}