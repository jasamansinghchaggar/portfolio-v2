import { type ReactNode } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const MainLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className='min-h-screen w-screen relative bg-black text-zinc-50'>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default MainLayout