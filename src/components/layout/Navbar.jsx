import { useState, useEffect } from "react";
import "./Navbar.css";

const links = [
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // stop the page scrolling behind the open phone menu
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={scrolled || open ? "navbar navbar--solid" : "navbar"}>
      <a href="#hero" className="navbar__logo" onClick={close}>
        <span className="navbar__name">YŪGEN</span>
        <span className="navbar__sub">Modern Japanese Kitchen</span>
      </a>

      <nav className={open ? "navbar__links navbar__links--open" : "navbar__links"}>
        {links.map((link) => (
          <a key={link.label} href={link.href} onClick={close}>
            {link.label}
          </a>
        ))}
        <a href="#reservation" className="navbar__cta navbar__cta--mobile" onClick={close}>
          Reserve a seat
        </a>
      </nav>

      <a href="#reservation" className="navbar__cta navbar__cta--desktop">
        Reserve a seat
      </a>

      <button
        className="navbar__toggle"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
      </button>
    </header>
  );
}

export default Navbar;