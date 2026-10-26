import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
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