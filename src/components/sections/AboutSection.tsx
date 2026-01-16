const AboutSection = () => {
  return (
    <section id="about" className="h-max w-full py-8 flex flex-col gap-6 items-end">
      <h1
        className="w-full uppercase text-[clamp(2rem,5vw,4rem)] font-light text-purple-500 tracking-wide"
      >
        About Me
      </h1>
      <p
        className="w-[80vw] lg:w-2/3 uppercase text-[clamp(1rem,4vw,2rem)] font-extralight text-right leading-[clamp(2rem,4vw,3rem)] tracking-[clamp(0.02rem,0.5vw,0.15rem)]"
      >
        Full-stack developer who turns ideas into pixel-perfect, performant web applications. I craft scalable backends and intuitive frontends—currently obsessed with Next.js, React, and building systems that users love. When I'm not debugging, you'll find me exploring open-source projects or tinkering with new technologies.
        <br />
        <br />
        Let's build something great together.
      </p>
    </section>
  )
}

export default AboutSection