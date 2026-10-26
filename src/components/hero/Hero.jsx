import "./Hero.css";
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
        <br />
        A <span className="hero__accent">quiet</span> moment
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
  return (
    <section id="hero" className="hero">
      {slides.map((slide) => (
        <div className="hero__slide" key={slide.id}>
          <img className="hero__shape" src={slide.curve} alt="" />

          <div className="hero__text">
            <h1>{slide.title}</h1>
            <p className="hero__jp jp">静かな一杯、心ほどける時間</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Hero;