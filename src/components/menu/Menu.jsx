import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import "./Menu.css";
import { categories, menuItems } from "../../data/menu";

function Menu() {
  const [activeCategory, setActiveCategory] = useState("Ramen");
  const [selected, setSelected] = useState(null); // the dish shown in the popup

  const visibleItems = menuItems.filter(
    (item) => item.category === activeCategory
  );

  // while the popup is open: Esc closes it, and the page behind can't scroll
  useEffect(() => {
    if (!selected) return;
    const onKey = (e) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <section id="menu" className="menu">
      <div className="menu__inner">
        <div className="menu__header">
          <div>
            <p className="menu__eyebrow">Our menu</p>
            <h2 className="menu__title">
              Thoughtful dishes
              <br />
              Made with respect
            </h2>
          </div>
          <a href="#menu" className="menu__all">
            Explore full menu →
          </a>
        </div>

        <div className="menu__tabs">
          {categories.map((category) => (
            <button
              key={category}
              className={
                category === activeCategory
                  ? "menu__tab menu__tab--active"
                  : "menu__tab"
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="menu__list">
          {visibleItems.length === 0 && (
            <p className="menu__empty">Coming soon.</p>
          )}

          {visibleItems.map((item) => (
            <article
              className="menu__item"
              key={item.id}
              onClick={() => setSelected(item)}
            >
              <img className="menu__img" src={item.image} alt={item.name} />

              <div className="menu__info">
                <h3 className="menu__name">{item.name}</h3>
                <p className="menu__jp jp">{item.jp}</p>
                <p className="menu__desc">{item.description}</p>
                <p className="menu__price">₹{item.price}</p>
              </div>

              <button
                className="menu__add"
                aria-label={`View details for ${item.name}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelected(item);
                }}
              >
                +
              </button>
            </article>
          ))}
        </div>
      </div>

      {/* POPUP */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="modal__card"
              role="dialog"
              aria-modal="true"
              aria-label={selected.name}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 220, damping: 26 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal__close"
                onClick={() => setSelected(null)}
                aria-label="Close"
              >
                ×
              </button>

              <img
                className="modal__img"
                src={selected.image}
                alt={selected.name}
              />

              <div className="modal__body">
                <div className="modal__tags">
                  {selected.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <h3 className="modal__name">{selected.name}</h3>
                <p className="modal__jp jp">{selected.jp}</p>

                <p className="modal__rating">
                  <span className="modal__stars">
                    {"★".repeat(Math.round(selected.rating))}
                  </span>
                  {selected.rating}
                </p>

                <p className="modal__desc">{selected.description}</p>

                <div className="modal__facts">
                  <div>
                    <span>Prep time</span>
                    <strong>{selected.prepTime}</strong>
                  </div>
                  <div>
                    <span>Spice</span>
                    <strong className="modal__spice">
                      {[0, 1, 2].map((i) => (
                        <i
                          key={i}
                          className={i < selected.spice ? "on" : ""}
                        />
                      ))}
                    </strong>
                  </div>
                </div>

                <h4 className="modal__sub">What's inside</h4>
                <ul className="modal__ingredients">
                  {selected.ingredients.map((ingredient) => (
                    <li key={ingredient}>{ingredient}</li>
                  ))}
                </ul>

                <div className="modal__footer">
                  <span className="modal__price">₹{selected.price}</span>
                  <a
                    href="#reservation"
                    className="modal__btn"
                    onClick={() => setSelected(null)}
                  >
                    Reserve a table
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Menu;