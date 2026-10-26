import { useState } from "react";
import "./Menu.css";
import { categories, menuItems } from "../../data/menu";

function Menu() {
  const [activeCategory, setActiveCategory] = useState("Ramen");

  const visibleItems = menuItems.filter(
    (item) => item.category === activeCategory
  );

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
            <article className="menu__item" key={item.id}>
              <img className="menu__img" src={item.image} alt={item.name} />

              <div className="menu__info">
                <h3 className="menu__name">{item.name}</h3>
                <p className="menu__jp jp">{item.jp}</p>
                <p className="menu__desc">{item.description}</p>
                <p className="menu__price">₹{item.price}</p>
              </div>

              <button className="menu__add" aria-label={`Add ${item.name}`}>
                +
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Menu;