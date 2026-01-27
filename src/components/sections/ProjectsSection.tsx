import FlowingMenu from "@/components/ui/FlowingMenu"
import { useRef } from "react";
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const projectItems = [
    {
        link: 'https://google-drive-clone-phi-one.vercel.app/',
        text: 'G-Drive',
        image: 'https://picsum.photos/600/400?random=1'
    },
    {
        link: 'https://freelancer-marketplace-six.vercel.app/',
        text: 'Freelancer Marketplace',
        image: 'https://picsum.photos/600/400?random=2'
    },
    {
        link: 'https://second-brain-typescript.vercel.app/',
        text: 'Second Brain',
        image: 'https://picsum.photos/600/400?random=3'
    },
    {
        link: 'https://github.com/jasamansinghchaggar/Blog-Project',
        text: 'Blog Site (Django)',
        image: 'https://picsum.photos/600/400?random=4'
    }
];

const ProjectsSection = () => {
    const projects = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from('#projects', {
            scale: 0.8,
            duration: 1.5,
            ease: 'power1.out',
            scrollTrigger: {
                trigger: projects.current,
                start: '-30% bottom',
                end: '+=500',
                scrub: 1,
            }
        })
        gsap.from('#projects h1, #projects p', {
            yPercent: 100,
            duration: 1,
            ease: 'power1.out',
            scrollTrigger: {
                trigger: projects.current,
                start: 'top bottom',
                end: '+=300',
                scrub: 1,
            }
        });
    }, { scope: projects });

    return (
        <div ref={projects}>
            <section id="projects" data-scroll-section className="h-max w-full bg-zinc-50 text-zinc-950 py-20">
                <div className="w-full px-4 lg:px-8 pb-6 flex justify-between">
                    <h1
                        className="flex-1 uppercase text-[clamp(0.5rem,5vw,2rem)] font-light tracking-wider text-zinc-950 hover-text"
                    >
                        Projects
                    </h1>
                    <p className="flex-1 uppercase tracking-wider font-light text-[clamp(0.05rem,5vw,1rem)] text-right">
                        A selection of my recent work
                    </p>
                </div>
                <div className=".flowing-menu-item">
                    <FlowingMenu
                        items={projectItems}
                        textColor="#09090B"
                        bgColor="#FAFAFA"
                        marqueeBgColor="#09090B"
                        marqueeTextColor="#FAFAFA"
                        borderColor="#09090B"
                    />
                </div>
            </section>
        </div>
    )
}

export default ProjectsSection