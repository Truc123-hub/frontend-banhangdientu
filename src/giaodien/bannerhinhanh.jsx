import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Dùng React Router để điều hướng thay vì thẻ <a> thuần túy
import 'bootstrap/dist/css/bootstrap.min.css'; // Thêm Bootstrap


import '../css/base.css'; // Thêm Base CSS
import '../css/style.css'; // Thêm Style CSS
import '../css/load.css'; // Thêm Load CSS

import '@fortawesome/fontawesome-free/css/all.min.css'; // FontAwesome từ CDN

const CarouselSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    "/image/anhSalePhone/bannersale1.jpg",
    "/image/anhSalePhone/bannersale2.jpg",
    "/image/anhSalePhone/bannersale3.jpg",
   
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="header">
      <div className="thung">
        <div className="row">
          <div className="col-lg-12">
            <div id="carouselExampleIndicators" className="carousel slide carousel-fade">
              <ol className="carousel-indicators">
                {images.map((_, index) => (
                  <li
                    key={index}
                    data-target="#carouselExampleIndicators"
                    data-slide-to={index}
                    className={index === activeIndex ? 'active' : ''}
                  />
                ))}
              </ol>
              <div className="carousel-inner">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
                    data-interval="4000"
                  >
                    <img src={image} className="d-block w-100" alt={`carousel-item-${index}`} />
                  </div>
                ))}
              </div>
              <button className="carousel-control-prev" type="button" onClick={handlePrev}>
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" onClick={handleNext}>
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselSection;
