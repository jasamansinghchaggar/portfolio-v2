import { useRef } from "react";
import MagicBento from "../ui/MagicBento";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
    const services = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from('#services', {
            scale: 0.8,
            duration: 1.5,
            ease: 'power1.out',
            scrollTrigger: {
                trigger: services.current,
                start: '-30% bottom',
                end: '+=1000',
                scrub: 1,
            }
        })
    }, { scope: services });

    return (
        <div ref={services}>
            <section id="services" className="min-h-screen w-full px-4 lg:px-8 py-10 md:py-20 remove-cursor">
                <MagicBento
                    textAutoHide={true}
                    enableStars
                    enableSpotlight
                    enableBorderGlow={true}
                    enableTilt={false}
                    enableMagnetism={false}
                    clickEffect
                    spotlightRadius={200}
                    particleCount={12}
                    glowColor="230, 230, 230"
                    disableAnimations={false}
                />
            </section>
        </div>
    )
}

export default ServicesSection