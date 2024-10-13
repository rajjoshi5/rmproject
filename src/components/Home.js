import React from 'react';
import HeroSlideshow from './HeroSlideshow';
import './Home.css';

function Home() {
  return (
    <section id="home" className="home">
      <HeroSlideshow />
      <h1>Welcome to Raj Marketing</h1>
      <p>Connecting quality textile manufacturers with prominent retailers since 1997</p>
      <button className="cta-button">Learn More</button>
    </section>
  );
}

export default Home;