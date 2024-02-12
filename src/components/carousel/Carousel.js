import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./carousel.css";
import Image from 'next/image';

const CarouselComponent = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <div className="overlay"></div>
        <Carousel showThumbs={false} autoPlay infiniteLoop className="">
          <div>
            <Image src="/images/1.png" alt="Image 1" className="carousel-image" width={800} height={600} />
          </div>
          <div>
            <Image src="/images/2.png" alt="Image 2" className="carousel-image" width={800} height={600} />
          </div>
          <div>
            <Image src="/images/3.png" alt="Image 3" className="carousel-image" width={800} height={600} />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselComponent;