import { useState } from "react";
import { motion } from "motion/react";
import "./Gallery.css";
import { galleryImages } from "../../data/gallery";

function Gallery() {
  const [active, setActive] = useState(0);
  const total = galleryImages.length;

  const next = () => setActive((current) => (current + 1) % total);
  const prev = () => setActive((current) => (current - 1 + total) % total);

  // how far is slide i from the active one? (-2, -1, 0, 1, 2)
  const getOffset = (i) => {
    let offset = i - active;
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;
    return offset;
  };

  // where should a slide sit for a given offset?
  const getPosition = (offset) => {
    const distance = Math.abs(offset);
    return {
      x: `${offset * 95}%`,
      scale: distance === 0 ? 1 : distance === 1 ? 0.75 : 0.55,
      opacity: distance === 0 ? 1 : distance === 1 ? 0.75 : 0,
    };
  };

  return (
    <section id="gallery" className="gallery">
      <div className="gallery__header">
        <h2>
          Bowls of
          <br />
          comfort
        </h2>
        <p className="jp">心を満たす一杯。</p>
      </div>

      <div className="gallery__stage">
        <button
          className="gallery__arrow gallery__arrow--prev"
          onClick={prev}
          aria-label="Previous image"
        >
          ←
        </button>

        {galleryImages.map((image, i) => {
          const offset = getOffset(i);
          return (
            <motion.div
              key={image.id}
              className="gallery__slide"
              animate={getPosition(offset)}
              transition={{ type: "spring", stiffness: 140, damping: 22 }}
              style={{ zIndex: 10 - Math.abs(offset) }}
              onClick={() => setActive(i)}
            >
              <img src={image.src} alt={image.alt} />
            </motion.div>
          );
        })}

        <button
          className="gallery__arrow gallery__arrow--next"
          onClick={next}
          aria-label="Next image"
        >
          →
        </button>
      </div>

      <div className="gallery__dots">
        {galleryImages.map((image, i) => (
          <button
            key={image.id}
            className={
              i === active ? "gallery__dot gallery__dot--active" : "gallery__dot"
            }
            onClick={() => setActive(i)}
            aria-label={`Show image ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Gallery;