import { Fragment } from 'react'
import TextPressure from './TextPressure'
import Magnet from './ui/Magnet'
import { useMagnet } from '@/hooks/useMagnet'

const navbarItems = [
    { title: 'Home', href: '/' },
    { title: 'About', href: '#about' },
    { title: 'Projects', href: '#projects' },
    { title: 'Contact', href: '#contact' }
]

const Footer = () => {
    const isMagnetActive = useMagnet();

    return (
        <Fragment>
            <footer className='h-max w-full border-t-2 border-zinc-900'>
                <TextPressure
                    text="Jasaman"
                    flex={true}
                    alpha={false}
                    width={true}
                    weight={true}
                    italic={false}
                />
                <div className='w-full flex flex-col-reverse lg:flex-row items-center justify-between'>
                    <p className='text-zinc-50/95 flex-1 text-xs lg:text-base text-center lg:text-left'>
                        © 2026 All Right Reserved. <br />
                        Coded by Jasaman
                    </p>
                    <div className='w-full lg:w-max flex-1 flex items-center justify-between lg:justify-end lg:gap-10 uppercase p-4 lg:p-0'>
                        {navbarItems.map((item, index) => (
                            <Magnet
                                padding={10}
                                magnetStrength={2}
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
                    </div>
                </div>
            </footer>
        </Fragment>
    )
}

export default Footer