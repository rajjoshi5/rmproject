import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './HeroSlideshow.css';

const slideImages = [
  '/images/handloom3.jpeg',
  '/images/handloom2.jpg',
  '/images/handloom1.jpeg'
];

const slideTexts = [
  "Modern textile manufacturing: Connecting quality and efficiency",
  "Traditional handloom weaving: Preserving our textile heritage",
  "Handcrafted excellence: The art of textile creation"
];

function HeroSlideshow() {
  return (
    <div className="hero-slideshow">
      <Slide easing="ease" duration={10000} transitionDuration={500}>
        {slideImages.map((image, index) => (
          <div key={index} className="each-slide">
            <div style={{ backgroundImage: `url(${image})` }}>
              <span>{slideTexts[index]}</span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}

export default HeroSlideshow;