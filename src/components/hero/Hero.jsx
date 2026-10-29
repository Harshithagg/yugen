import { useRef, useState } from "react";
import { useScroll } from "motion/react";
import "./Hero.css";
import RamenScene from "./RamenScene";
import curve1 from "../../assets/images/redcurve1.svg";
import curve2 from "../../assets/images/redcurve2.svg";
import curve3 from "../../assets/images/redcurve3.svg";

const slides = [
  {
    id: 1,
    curve: curve1,
    title: (
      <>
        A warm bowl.
        <br />A <span className="hero__accent">quiet</span> moment
      </>
    ),
  },
  {
    id: 2,
    curve: curve2,
    title: (
      <>
        Made slowly
        <br />
        <span className="hero__accent">Served</span> warmly
      </>
    ),
  },
  {
    id: 3,
    curve: curve3,
    title: (
      <>
        Welcome
        <br />
        to <span className="hero__accent">YŪGEN</span>
      </>
    ),
  },
];

function Hero() {
  const heroRef = useRef(null);
  // load the heavy 3D scene only on tablets and desktops
  const [showScene] = useState(() => window.matchMedia("(min-width: 861px)").matches);

  // 0 at the start of the hero, 1 at the end of the hero
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  });

  return (
    <section id="hero" className="hero" ref={heroRef}>
      {/* the three screens, stacked like before */}
      {slides.map((slide, i) => {
        const Title = i === 0 ? "h1" : "h2";
        return (
          <div className="hero__slide" key={slide.id}>
            <img className="hero__shape" src={slide.curve} alt="" />
            <div className="hero__text">
              <Title className="hero__title">{slide.title}</Title>
              <p className="hero__jp jp">静かな一杯、心ほどける時間</p>
            </div>
          </div>
        );
      })}

      {/* the ramen: sticks to the screen, but only inside the hero */}
      {showScene && (
        <div className="hero__scene-track">
          <div className="hero__scene-sticky">
            <RamenScene progress={scrollYProgress} heroRef={heroRef} />
          </div>
        </div>
      )}
    </section>
  );
}

export default Hero;