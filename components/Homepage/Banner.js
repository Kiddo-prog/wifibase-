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
      <Box mt={"2em"}>
            <Flex 
                alignItems={{base: 'center', md: 'center', lg: 'flex-start'} }
                justifyContent={'space-around'} 
                direction={{
                  base: 'column', 
                  md: 'column',
                  lg: 'row'}}
                  mt={10}
                  fontFamily={"'Poppins', sans-serif"} 
                >
              <Box flex={5}>
                <Heading
                fontSize={{base: "1em", md: "2em", lg: "2.5em"}}
                textAlign={{base: 'center', md: 'center', lg: 'left'}}
                mb={10}
                >
                  FAST AND SECURED NETWORK TO YOUR DOORSTEP
                  </Heading>
                <Text 
                  mb={7}
                  fontWeight={300}
                  textAlign={{base: 'center', md: 'center', lg: 'left'}}
                  fontSize={{base: "sm", md: "md", lg: "lg"}}
                >
                  Wifispace is one of the best network service provider in whole of nigeria.  We&apos;re a values-driven company that provides affordable, intuitive, networking tools for ambitious people and teams.</Text>
                <HStack spacing={5} rowGap={5} justifyContent={{base: 'center', md: 'center', lg: 'flex-start'}}>
                  <Button as={'a'} href={'/register'} w={{base: '100%', md: '100%', lg: 'inherit'}} fontWeight={'200'} bgColor={'blue.600'} color={'white'} _hover={{bgColor: 'blue.800'}}>Get Started</Button>
                  <Button as={'a'} href={'#'} bgColor={''} fontWeight={'200'} w={{base: '100%', md: '100%', lg: 'inherit'}} border={'1px solid blue'} color={'blue'}>Learn More</Button>
              </HStack>
              </Box>
                <Image 
                  src={'/images/mobile.png'} 
                  alt={'person with mobile'} 
                  objectFit={'cover'} 
                  boxSize={'md'}
                  flex={5}
                />
            </Flex>
            </Box>
    )
}