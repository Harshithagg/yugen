// App.jsx
// This is the ROOT file of the whole app — think of it as the "main page."
// It imports every section component and arranges them in order on the page.
// React reads this file and renders everything you see in the browser.

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Menu from './components/menu/Menu';
import Gallery from './components/gallery/Gallery';
import Reservation from './components/reservation/Reservation';
import Location from './components/location/Location';

function App() {
  return (
    <>
      {/* Navbar sits at the top, outside all sections, so it stays visible */}
      <Navbar />

      {/* Each component below is a full-page section of the website */}
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Reservation />
      <Location />

      {/* Footer sits at the bottom, after all sections */}
      <Footer />
    </>
  );
}

export default App;
