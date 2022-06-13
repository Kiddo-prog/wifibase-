import { Box, Link, Flex, HStack, Stack, Button } from '@chakra-ui/react'

import { GiHamburgerMenu } from 'react-icons/gi'

export default function Header(){
    return (
        <>
        <Box 
            backgroundColor={'whiteAlpha.100'} 
            p={6} 
            fontFamily={"'Poppins', sans-serif"} 
            fontWeight={300} 
            letterSpacing={0.5}
            mb={{base: 0, md: 4, lg: 5}}
        >
            <Flex 
                alignItems={'center'} 
                alignContent={'center'}
                justifyContent={'space-between'} 
                flexDirection={'row'}
            >
                <Box>
                    <Link href='/'>
                        LOGO
                    </Link>
                </Box>

                <Box 
                    textTransform={'uppercase'} 
                    display={{
                        base: 'none', 
                        md: 'none', 
                        lg: 'block'
                    }}>
                    <DesktopNavItems />
                </Box>

                <Box display={{base: 'block', md: 'block', lg: 'none'}} cursor={'pointer'}>
                    <GiHamburgerMenu />
                </Box>
            </Flex>
        </Box>
        </>
    )
}


export const NAV_ITEMS = [
    {
        label: 'About us',
        href: '/about'
    }, 
    {
        label: 'pricing',
        href: '/pricing'
    },
    {
        label: 'services',
        href: '/services'
    }
]

export const AUTH_LINKS = [
    {
        label: 'Login',
        href: '/login'
    },
    {
        label: 'Get Started',
        href: '/register'
    }
]

export const DesktopNavItems = () => {
        return(
            <Stack justifyContent={'space-between'} direction={'row'} spacing={5}>
                <HStack spacing={5}>
                {NAV_ITEMS.map(item => (
                    <NavItem key={item.label} {...item} />
                ))}
                </HStack>

                <HStack>
                {
                    AUTH_LINKS.map(auth => (
                        <AuthItem key={auth.label} {...auth} />
                    ))
                }
                </HStack>
            </Stack>
        )
}

export const AuthItem = ({ label, href }) => {
    return(
        <HStack spacing={5} 
            _first={{
                _hover: {textDecoration: 'underline'}
            }}
            _last={{
                backgroundColor: 'pink.400', 
                color: 'white',
                 _hover: {
                    backgroundColor: 'pink.600'
                    }
                }}
            >
        <Button 
            as="a" 
            href={href} 
            backgroundColor={'inherit'} 
            _hover={'inherit'}
            fontWeight={'inherit'}
            fontSize={["8", "10", "14", "18"]}>
            {label}
        </Button>
    </HStack>
    )
}

export const NavItem = ({label, href}) => {
    return ( 
        <HStack spacing={5}>
            <Link href={href} _hover={{color: 'blue'}}>
                {label}
            </Link>
        </HStack>
    )
}

