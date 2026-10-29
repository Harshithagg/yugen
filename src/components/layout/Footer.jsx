import "./Footer.css";
import branch from "../../assets/images/branch2.png";

const columns = [
  {
    title: "Navigation",
    links: [
      { label: "About", href: "#about" },
      { label: "Menu", href: "#menu" },
      { label: "Gallery", href: "#gallery" },
      { label: "Reserve", href: "#reservation" },
    ],
  },
  {
    title: "Information",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press Kit", href: "#" },
    ],
  },
  {
    title: "Follow Us",
    links: [
      { label: "Instagram", href: "#" },
      { label: "Facebook", href: "#" },
      { label: "X (Twitter)", href: "#" },
      { label: "TripAdvisor", href: "#" },
    ],
  },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <h2 className="footer__logo">YŪGEN</h2>
          <p className="footer__sub">Modern Japanese Kitchen</p>
          <p className="footer__jp jp">モダン・ジャパニーズ・キッチン</p>
          <p className="footer__motto">
            Good food
            <br />
            Good people
            <br />
            Good times
          </p>
          <img className="footer__branch" src={branch} alt="" />
        </div>

        <div className="footer__columns">
          {columns.map((column) => (
            <div className="footer__column" key={column.title}>
              <h3>{column.title}</h3>
              <ul>
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <p className="footer__copy">
        © 2026 YŪGEN Modern Japanese Kitchen. All rights reserved
      </p>
    </footer>
  );
}

export default Footer;