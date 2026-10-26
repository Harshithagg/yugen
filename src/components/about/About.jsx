import "./About.css";
import bg from "../../assets/images/aboutbg.png";
import interior from "../../assets/images/restaurant-interior.png";

const pillars = [
  {
    num: "01",
    title: "Pure Ingredients",
    text: "We source the finest ingredients, seasonally and locally",
  },
  {
    num: "02",
    title: "Crafted with Care",
    text: "Every bowl is prepared with precision and heart",
  },
  {
    num: "03",
    title: "Honest Experience",
    text: "Bringing people together through authentic hospitality",
  },
];

function About() {
  return (
    <section
      id="about"
      className="about"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="about__inner">
        {/* 1. Intro */}
        <div className="about__intro">
          <h2 className="about__title">
            Inspired by Japan
            <br />
            Rooted in <span className="about__accent">simplicity</span>
          </h2>
          <p className="about__text">
            YŪGEN is a modern Japanese kitchen inspired by the quiet rituals of
            everyday dining, thoughtful ingredients, careful preparation, and
            food meant to be enjoyed slowly.
          </p>
          <a href="#menu" className="about__link">
            Discover our story
          </a>
        </div>

        {/* 2. Two cards */}
        <div className="about__cards">
          <article className="about__card about__card--photo">
            <img src={interior} alt="" />
            <div className="about__card-body">
              <h3>
                A space for connection, crafted with{" "}
                <span className="about__accent">intention</span>
              </h3>
              <a href="#gallery">Explore our space</a>
            </div>
          </article>

          <article className="about__card about__card--red">
            <p>Good food</p>
            <p>Good people</p>
            <p>Good times</p>
          </article>
        </div>

        {/* 3. Bottom row */}
        <div className="about__bottom">
          <div className="about__beauty">
            <h3>The beauty of simplicity</h3>
            <p className="jp">シンプルの中に、豊かさがある</p>
          </div>

          <div className="about__pillars">
            {pillars.map((pillar) => (
              <div className="about__pillar" key={pillar.num}>
                <span className="about__num">{pillar.num}</span>
                <h4>{pillar.title}</h4>
                <p>{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;