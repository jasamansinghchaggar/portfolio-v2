import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"

gsap.registerPlugin(ScrollTrigger, SplitText)

const AboutSection = () => {
  const about = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const splitHeading = new SplitText('h1', {
      type: 'words',
      mask: 'words'
    })

    const splitParagraph = new SplitText('p', {
      type: 'lines',
      mask: 'lines'
    })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: about.current,
        start: 'top +=100',
        end: '+=3000',
        scrub: 1,
        pin: true,
      }
    })

    tl.from(splitHeading.words, {
      yPercent: 1000,
      stagger: 0.1,
      ease: 'power1.out',
    })
      .from(splitParagraph.lines, {
        yPercent: 1000,
        stagger: 0.1,
        ease: 'power1.out',
      })
  }, { scope: about })

  return (
    <section ref={about} id="about" className="h-max w-full flex flex-col gap-6 items-end px-4 lg:px-8 pb-40">
      <h1
        className="w-full uppercase text-[clamp(2rem,5vw,4rem)] font-light text-purple-500 tracking-wide hover-text"
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