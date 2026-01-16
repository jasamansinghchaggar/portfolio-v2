import { type ReactNode } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useLocomotiveScroll } from '@/hooks/useLocomotiveScroll'

const MainLayout = ({ children }: { children: ReactNode }) => {
    const { scrollRef } = useLocomotiveScroll();

    return (
        <div ref={scrollRef} data-scroll-container className='min-h-screen w-screen relative bg-black text-zinc-50 p-4 lg:p-8 font-satoshi overflow-x-hidden'>
            <Header />
            <div data-scroll-section>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default MainLayout