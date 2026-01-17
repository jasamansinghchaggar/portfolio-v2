import FlowingMenu from "@/components/ui/FlowingMenu"

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
    return (
        <section id="projects" className="h-max w-full bg-zinc-50 text-zinc-950 py-20">
            <div className="w-full px-4 lg:px-8 pb-6 flex justify-between">
                <h1
                    className="flex-1 uppercase text-[clamp(0.5rem,5vw,2rem)] font-light tracking-wider text-zinc-950"
                >
                    Projects
                </h1>
                <p className="flex-1 uppercase tracking-wider font-light text-[clamp(0.05rem,5vw,1rem)] text-right">
                    A selection of my recent work
                </p>
            </div>
            <FlowingMenu
                items={projectItems}
                textColor="#09090B"
                bgColor="#FAFAFA"
                marqueeBgColor="#09090B"
                marqueeTextColor="#FAFAFA"
                borderColor="#09090B"
            />
        </section>
    )
}

export default ProjectsSection