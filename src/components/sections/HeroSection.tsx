import ASCIIText from '@/components/ui/ASCIIText'
import { useResponsiveFontSizes } from '@/hooks/useResponsiveFontSizes'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import { useRef } from 'react';

gsap.registerPlugin(SplitText);

const HeroSection = () => {
    const { asciiFontSize, textFontSize } = useResponsiveFontSizes();
    const home = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            delay: 5
        });
        const split = new SplitText(".hero_text", {
            type: 'words',
            mask: 'words'
        });

        tl.from(split.words, {
            duration: 1.5,
            yPercent: 100,
            ease: 'power2.out',
            stagger: 0.03,
        })
        tl.from('.side_text', {
            duration: 1,
            opacity: 0,
            ease: 'power2.out',
        }, '-=0.5'
        )
    }, { scope: home })

    return (
        <main ref={home} id='home' className='h-[93vh] flex flex-col-reverse lg:flex-row overflow-hidden py-10 lg:py-14 px-4 lg:px-8'>
            <div className="w-full h-[40%] lg:w-[60%] lg:h-full flex items-end">
                <h1 className='hero_text uppercase text-[clamp(2.5rem,6vw,8rem)] leading-[clamp(2.5rem,6vw,8rem)] font-light hover-text'>
                    Your project deserve a beautiful digital home, not another PDF.
                </h1>
            </div>
            <div className="side_text relative flex-1 w-full h-[30%] lg:h-full lg:w-[30%] remove-cursor">
                <ASCIIText
                    text='Hey!'
                    enableWaves={false}
                    asciiFontSize={asciiFontSize}
                    textFontSize={textFontSize}
                />
            </div>
        </main>
    )
}

export default HeroSection