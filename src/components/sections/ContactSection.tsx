import { Icon } from '@iconify-icon/react';
import Magnet from '../ui/Magnet';
import { useMagnet } from '@/hooks/useMagnet';
import { useRef } from 'react';
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"

gsap.registerPlugin(ScrollTrigger, SplitText)

const ContactSection = () => {
    const contact = useRef<HTMLDivElement>(null);
    const isMagnetActive = useMagnet();

    const contactItems = [
        {
            link: 'mailto:chaggarjasamansingh@gmail.com',
            icon: <Icon icon="simple-icons:gmail" width={`${isMagnetActive ? 32 : 24}`} height={`${isMagnetActive ? 32 : 24}`} />
        },
        {
            link: 'https://linkedin.com/in/jasamansinghchaggar',
            icon: <Icon icon="simple-icons:linkedin" width={`${isMagnetActive ? 32 : 24}`} height={`${isMagnetActive ? 32 : 24}`} />
        },
        {
            link: 'https://twitter.com/jschaggar',
            icon: <Icon icon="simple-icons:twitter" width={`${isMagnetActive ? 32 : 24}`} height={`${isMagnetActive ? 32 : 24}`} />
        },
        {
            link: 'https://github.com/jasamansinghchaggar',
            icon: <Icon icon="simple-icons:github" width={`${isMagnetActive ? 32 : 24}`} height={`${isMagnetActive ? 32 : 24}`} />
        },
    ]

    useGSAP(() => {
        const splitHeading = new SplitText('h1', {
            type: 'lines',
            mask: 'lines'
        })

        const tl = gsap.timeline();

        tl.from(splitHeading.lines, {
            yPercent: 100,
            stagger: 0.1,
            ease: 'power1.out',
            scrollTrigger: {
                trigger: contact.current,
                start: '40% bottom',
                end: '+=400',
                scrub: 1,
            }
        }).from('div a', {
            opacity: 0,
            yPercent: 100,
            stagger: 0.1,
            ease: 'power1.out',
            scrollTrigger: {
                trigger: contact.current,
                start: 'top center',
                end: '+=300',
                scrub: 1,
            }
        })
    }, { scope: contact });

    return (
        <section ref={contact} id='contact' className="h-max w-full bg-zinc-50 text-zinc-950 py-20 px-4 lg:px-8">
            <h1 className="uppercase text-[clamp(2rem,5vw,4rem)] leading-[clamp(3rem,5vw,5rem)] tracking-tight font-light hover-text">
                Let's talk about a <br />
                project, collaboration or <br />
                an idea you may have.
            </h1>
            <div className='w-full flex justify-end items-center gap-10 pt-10'>
                {contactItems.map((item, index) => (
                    <Magnet
                        key={index}
                        padding={15}
                        magnetStrength={3}
                        disabled={!isMagnetActive}
                    >
                        <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="remove-cursor"
                        >
                            {item.icon}
                        </a>
                    </Magnet>
                ))}
            </div>
        </section >
    )
}

export default ContactSection