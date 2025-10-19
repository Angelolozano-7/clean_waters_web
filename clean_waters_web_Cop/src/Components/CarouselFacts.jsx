import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importar los estilos CSS básicos
import Finger from '../../images/microplasticFinger.jpg';
import './CarouselFacts.css'

const cards = [
  {
    title: "Size of MP",
    description: "Microplastics are very small pieces of plastic that pollute the environment. They are not a specific kind of plastic, but rather any type of plastic fragment that is less than 5 millimeters in length according to the U.S.",
    imageUrl: "../../images/microplasticFinger.jpg",
  },
  {
    title: "Quantity",
    description: "The quantity of microplastics in the ocean has been estimated through various studies, revealing a significant environmental concern. One study estimated that about 171 trillion microplastic particles were floating in the ocean as of 2019.",
    imageUrl: "../../images/Quantity.png",
  },
  {
    title: "Types",
    description: "Microplastics are tiny plastic particles that can be broadly categorized into two main types based on their origin: Primary and Secondary.",
    imageUrl: "../../images/Types.png",
  },
  {
    title: "Sources",
    description: "Microplastics have a lot of sources, for example, industries, house wasted water, etc.",
    imageUrl: Finger,
  },
  {
    title: "Nodest",
    description: "Microplastics have a lot of sources, for example, malnakslana, house wasted water, etc.",
    imageUrl: Finger,
  },
];

const CarouselFacts = () => {
  return (
    <div className="carousel-container">
      <Carousel 
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={false}
        centerMode={true}
        /*dynamicHeight={true}*/
        centerSlidePercentage={33.33}
        emulateTouch={true}
        useKeyboardArrows={true}
        showIndicators={false}
        swipeable={true}
      >
        {cards.map((card, index) => (
          <div key={index} className="carousel-slide">
            <h2>{card.title}</h2>
            <p>{card.description}</p>
            <img src={card.imageUrl} alt={card.title} className="image" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselFacts;
