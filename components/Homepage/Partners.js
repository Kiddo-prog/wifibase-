import { Flex, Heading, HStack, Image } from "@chakra-ui/react"

export default function Partners(){
    return(
        <div>
            <Heading>Partners</Heading>
            <Flex justifyContent={'space-around'} alignItems={'center'}>
                Bet9ja
            </Flex>
            <Image src={'/images/scribble2.svg'} alt={'scribble'} objectFit={'cover'} boxSize={'md'}/>
        </div>
    )
}