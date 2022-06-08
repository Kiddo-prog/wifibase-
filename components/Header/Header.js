import Link from "next/link"

export default function Header(){
    return (
        <header>
            <nav>
            <div>
                <Link href='/'>
                    <a>LOGO</a>
                </Link>
            </div>

            <div>
                <DesktopNavItems />
            </div>
            </nav>
        </header>
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
            NAV_ITEMS.map(item => (
                <NavItem key={item.label} {...item} />
            ))
        )
}

export const NavItem = ({label, href}) => {
    return (
        <div>
            <Link href={href}>
                <a>{label}</a>
            </Link>
        </div>
    )
}

