import MagicBento from "../ui/MagicBento";

const ServicesSection = () => {
    return (
        <section className="h-screen w-full px-4 lg:px-8 py-6">
            {/* <h1 className="text-[clamp(2rem,5vw,3rem)] uppercase font-light">Services I Offer</h1> */}
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
    )
}

export default ServicesSection