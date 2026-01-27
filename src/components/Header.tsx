import { Fragment, useRef } from 'react'
import Magnet from './ui/Magnet'
import { useMagnet } from '@/hooks/useMagnet';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const navbarItems = [
    { title: 'Home', href: '#home' },
    { title: 'About', href: '#about' },
    { title: 'Services', href: '#services' },
    { title: 'Projects', href: '#projects' },
    { title: 'Contact', href: '#contact' }
]

const Header = () => {
    const isMagnetActive = useMagnet();
    const nav = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from("nav a", {
            delay: 5,
            opacity: 0,
            stagger: 0.3,
            ease: "power2.out",
            duration: 1.7
        })
    }, { scope: nav })

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        gsap.to(window, {
            scrollTo: {
                y: href,
                offsetY: 0
            },
            duration: 1,
            ease: "power2.out"
        });
    };

    return (
        <Fragment>
            <nav ref={nav} className='w-full fixed top-0 left-0 flex items-center justify-between uppercase font-extralight mix-blend-difference p-4 lg:p-8 z-999'>
                {navbarItems.map((item, index) => (
                    <Magnet
                        padding={60}
                        magnetStrength={4}
                        key={index}
                        disabled={!isMagnetActive}
                    >
                        <a
                            className='px-1.5 py-1 rounded-sm hover:bg-zinc-50 hover:text-zinc-950 transition-colors duration-300 text-[clamp(0.875rem,2vw,1rem)] remove-cursor'
                            href={item.href}
                            onClick={(e) => handleNavClick(e, item.href)}
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