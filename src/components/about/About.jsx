import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <h2 className="about__eyebrow">Inspired by Japan</h2>
      <h2 className="about__title">Rooted in simplicity</h2>
      <p className="about__text">
        YŪGEN is a modern Japanese kitchen inspired by the quiet rituals of everyday dining ,
        thoughtful ingredients, careful preparation, and food meant to be enjoyed slowly
      </p>

      <div className="about__pillars">
        <div className="about__pillar">
          <span>01</span>
          <h3>Pure Ingredients</h3>
          <p>We source the finest ingredients, seasonally and locally</p>
        </div>
        {/* you add 02 and 03 */}
      </div>
    </section>
  );
}

export default About;