import { Fragment } from 'react'
import Magnet from './ui/Magnet'

const navbarItems = [
    { title: 'Home', href: '/' },
    { title: 'About', href: '#about' },
    { title: 'Projects', href: '#projects' },
    { title: 'Contact', href: '#contact' }
]

const Header = () => {
    return (
        <Fragment>
            <nav className='w-full fixed top-0 left-0 p-8 flex items-center justify-between uppercase font-extralight'>
                {navbarItems.map((item, index) => (
                    <Magnet
                        padding={60}
                        magnetStrength={4}
                        key={index}
                    >
                        <a
                            className='px-2 py-1 rounded-xs hover:bg-zinc-50 hover:text-zinc-950 transition-colors duration-300'
                            href={item.href}
                        >
                            {item.title}
                        </a>
                    </Magnet>
                ))}
            </nav>
        </Fragment>
    )
}

export default Header