import ASCIIText from '@/components/ui/ASCIIText'
import { useResponsiveFontSizes } from '@/hooks/useResponsiveFontSizes'

const HeroSection = () => {
    const { asciiFontSize, textFontSize } = useResponsiveFontSizes();

    return (
        <main id='home' className='h-[93vh] flex flex-col-reverse lg:flex-row overflow-hidden py-10 lg:py-14 px-4 lg:px-8'>
            <div className="w-full h-[40%] lg:w-[60%] lg:h-full flex items-end">
                <h1 className='uppercase text-[clamp(2.5rem,6vw,8rem)] leading-[clamp(2.5rem,6vw,8rem)] font-light'>
                    Your project deserve a beautiful digital home, not another PDF.
                </h1>
            </div>
            <div className="relative flex-1 w-full h-[30%] lg:h-full lg:w-[30%]">
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