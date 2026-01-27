import { type ReactNode } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useLocomotiveScroll } from '@/hooks/useLocomotiveScroll'
import ClickSpark from '@/components/ui/ClickSpark'
import CustomCursor from '@/components/CustomCursor'
import { useMobile } from '@/hooks/useMobile'
import { LocomotiveScrollContext } from '@/contexts/LocomotiveScrollContext'

const MainLayout = ({ children }: { children: ReactNode }) => {
    const { scrollRef, locomotiveScroll } = useLocomotiveScroll();
    const deviceType = useMobile();

    return (
        <LocomotiveScrollContext.Provider value={locomotiveScroll}>
            <div ref={scrollRef} data-scroll-container className='min-h-screen w-screen relative bg-black text-zinc-50 font-satoshi overflow-x-hidden'>
                {
                    deviceType !== 'mobile' && deviceType !== 'tablet' && <CustomCursor />
                }
                <ClickSpark
                    sparkColor='#fff'
                    sparkSize={10}
                    sparkRadius={25}
                    sparkCount={8}
                    duration={400}
                >
                    <Header />
                    <div data-scroll-section>
                        {children}
                    </div>
                    <Footer />
                </ClickSpark >
            </div>
        </LocomotiveScrollContext.Provider>
    )
}

export default MainLayout