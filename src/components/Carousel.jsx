import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import img1 from '/img1.png';
import img2 from '/img2.png';
import img3 from '/img3.png';
import img4 from '/img4.png';
import img5 from '/img5.png';

const carouselImages = [img1, img2, img3, img4, img5];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (_, next) => setActiveIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, centerMode: true, centerPadding: "0px" }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1, centerMode: true, centerPadding: "0px" }
      }
    ]
  };

  return (
    <section className="carousel-section" id="screenshots">
      <div className="carousel-container">
        <Slider {...settings}>
          {carouselImages.map((img, index) => (
            <div
              key={index}
              className={`carousel-slide ${index === activeIndex ? 'active' : ''}`}
            >
              <img src={img} alt={`Screenshot ${index + 1}`} className="carousel-image" />
            </div>
          ))}
        </Slider>
      </div>

      <style jsx>{`
        .carousel-container {
          width: calc(100% - 20px);
          padding-left: 10px;
          padding-right: 10px;
          margin: 0 auto;
          box-sizing: border-box;
          height: 660px;
        }

        .slick-slide {
          display: flex !important;
          justify-content: center;
          align-items: center;
          padding: 0 5px;
          transition: transform 0.6s ease;
          perspective: 1000px;
        }

        .carousel-slide {
          transition: transform 0.6s ease, height 0.6s ease;
          will-change: transform;
          cursor: pointer;
          border-radius: 12px;
          overflow: hidden;
        }

        .carousel-image {
          width: 100%;
          height: 650px;
          object-fit: cover;
          border-radius: 12px;
          transition: transform 0.6s ease, height 0.6s ease;
          backface-visibility: hidden;
        }

        .carousel-slide.active {
          z-index: 10;
          border-radius: 12px;
        }
        /* Slight 3D tilt effect for non-active slides */
        .slick-slide:not(.slick-center) {
          transform: rotateY(15deg) scale(0.9);
          filter: brightness(0.85);
          opacity: 0.7;
          z-index: 1;
        }

        .carousel-slide.active .carousel-image {
          height: 650px;
          border-radius: 12px;
        }

        /* Dots */
        .slick-dots {
          bottom: -30px;
        }
        .slick-dots li button:before {
          font-size: 12px;
          color: #555;
        }
        .slick-dots li.slick-active button:before {
          color: #000;
        }
      `}</style>
    </section>
  );
};

export default Carousel;
