import ASCIIText from '@/components/ui/ASCIIText'
import { useResponsiveFontSizes } from '@/hooks/useResponsiveFontSizes'

const HeroSection = () => {
    const { asciiFontSize, textFontSize } = useResponsiveFontSizes();

    return (
        <main id='home' className='h-screen pt-24 py-8 px-8 flex flex-col-reverse lg:flex-row font-satoshi overflow-hidden'>
            <div className="w-full h-[60%] lg:w-[60%] lg:h-full flex items-end">
                <h1 className='uppercase text-[clamp(2.5rem,6vw,8rem)] leading-[clamp(2.5rem,6vw,8rem)] font-light'>
                    Your project deserve a beautiful digital home, not another PDF.
                </h1>
            </div>
            <div className="relative flex-1 w-full h-[30%] lg:h-full lg:w-[30%]">
                <ASCIIText
                    text='Hey!'
                    enableWaves={true}
                    asciiFontSize={asciiFontSize}
                    textFontSize={textFontSize}
                />
            </div>
        </main>
    )
}

export default HeroSection