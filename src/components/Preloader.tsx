import CountUp from "@/components/ui/CountUp"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from "react";

const Preloader = () => {
    const preloader = useRef<HTMLDivElement>(null)

    const { contextSafe } = useGSAP({ scope: preloader });

    const handleEnd = contextSafe(() => {
        gsap.to(".preloader", {
            yPercent: -100,
            duration: 1,
            ease: "power2.inOut",
        })
    })
    return (
        <div ref={preloader} >
            <div className="preloader fixed top-0 left-0 h-full w-screen overflow-hidden px-8 lg:px-16 bg-white z-99999 flex items-end">
                <div className="h-max w-full text-right">
                    <CountUp
                        from={0}
                        to={100}
                        direction="up"
                        duration={1}
                        className="count-up-text text-[clamp(5rem,10vw,9rem)] font-bold"
                        onEnd={handleEnd}
                    />
                </div>
            </div>
        </div>
    )
}

export default Preloader    