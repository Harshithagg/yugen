import "./Location.css";
import map from "../../assets/images/basemap.webp";
import { restaurant } from "../../data/restaurant";

function Location() {
  return (
    <section id="location" className="location">
      <div className="location__info">
        <h2>Find us</h2>
        <p className="location__jp jp">お店の場所</p>

        <div className="location__block">
          <h3>{restaurant.name}</h3>
          <p>{restaurant.address}</p>
        </div>

        <div className="location__block">
          <h3>Open Daily</h3>
          <p>{restaurant.hours}</p>
        </div>

        <a
          className="location__directions"
          href={restaurant.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Get directions →
        </a>
      </div>

      <a
        className="location__map"
        href={restaurant.directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open the map in Google Maps"
      >
        <img src={map} alt="Map showing the YŪGEN location" />
        <span className="location__pin" />
      </a>
    </section>
  );
}

export default Location;