import { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={scrolled ? "navbar navbar--scrolled" : "navbar"}>
      <a href="#hero" className="navbar__logo">
        <span className="navbar__name">YŪGEN</span>
        <span className="navbar__sub">Modern Japanese Kitchen</span>
      </a>

      <nav className="navbar__links">
        <a href="#about">About</a>
        <a href="#menu">Menu</a>
        <a href="#gallery">Gallery</a>
        <a href="#location">Location</a>
      </nav>

      <a href="#reservation" className="navbar__cta">Reserve a seat</a>
    </header>
  );
}

export default Navbar;