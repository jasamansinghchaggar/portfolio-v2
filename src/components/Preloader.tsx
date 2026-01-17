import CountUp from "@/components/ui/CountUp"

const Preloader = () => {
    return (
        <div className="fixed top-0 left-0 h-full w-screen overflow-hidden px-8 lg:px-16 bg-white z-99999 flex items-end">
            <div className="h-max w-full text-right">
                <CountUp
                    from={0}
                    to={100}
                    direction="up"
                    duration={1}
                    className="count-up-text text-[clamp(5rem,10vw,9rem)] font-bold"
                />
            </div>
        </div>
    )
}

export default Preloader    