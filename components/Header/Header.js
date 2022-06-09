import Link from "next/link"
import { Box, Flex, HStack, Stack } from '@chakra-ui/react'

export default function Header(){
    return (
        <Flex alignItems={'center'} justifyContent={'space-between'} flexDirection={'row'}>
            <Box>
                <Link href='/'>
                    <a>LOGO</a>
                </Link>
            </Box>

            <Box textTransform={'uppercase'}>
                <DesktopNavItems />
            </Box>
        </Flex>
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
            <Stack justifyContent={'space-between'} direction={'row'}>
                {NAV_ITEMS.map(item => (
                    <NavItem key={item.label} {...item} />
                ))}

                {
                    AUTH_LINKS.map(auth => (
                        <AuthItem key={auth.label} {...auth} />
                    ))
                }
            </Stack>
        )
}

export const AuthItem = ({ label, href }) => {
    return(
        <HStack spacing={5}>
        <Link href={href}>
            <a>{label}</a>
        </Link>
    </HStack>
    )
}

export const NavItem = ({label, href}) => {
    return ( 
        <HStack spacing={5}>
            <Link href={href}>
                <a>{label}</a>
            </Link>
        </HStack>
    )
}

