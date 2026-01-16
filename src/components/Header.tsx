import { Fragment } from 'react'
import Magnet from './ui/Magnet'
import { useMagnet } from '@/hooks/useMagnet';

const navbarItems = [
    { title: 'Home', href: '#home' },
    { title: 'About', href: '#about' },
    { title: 'Projects', href: '#projects' },
    { title: 'Contact', href: '#contact' }
]

const Header = () => {

    const isMagnetActive = useMagnet();

    return (
        <Fragment>
            <nav className='w-full fixed top-0 left-0 p-8 flex items-center justify-between uppercase font-extralight'>
                {navbarItems.map((item, index) => (
                    <Magnet
                        padding={60}
                        magnetStrength={4}
                        key={index}
                        disabled={!isMagnetActive}
                    >
                        <a
                            className='px-1 py-0.5 rounded-xs hover:bg-zinc-50 hover:text-zinc-950 transition-colors duration-300 text-[clamp(0.875rem,2vw,1rem)]'
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