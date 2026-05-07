import React, { useState } from "react";
import '../style/style.css'
import Monitor1 from '../assets/images/s1_1.webp'
import Monitor2 from '../assets/images/s1_2.webp'
import img from '../assets/images/image.png'

const slides = [
  {
    id: 1,
    title: "Mount Carved 2200XD",
    subtitle: "Best Products",
    desc: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    img: Monitor1
  },
  {
    id: 2,
    title: "Mount Carved 2200XD",
    subtitle: "Best Products",
    desc: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    img: Monitor2
  },
];

function Slider() {
  const [current, setCurrent] = useState(0);
  const [animate, setAnimate] = useState(true);

  const handleSlide = (direction) => {
    setAnimate(false);

    setTimeout(() => {
      setCurrent((prev) =>
        direction === "next"
          ? (prev + 1) % slides.length
          : (prev - 1 + slides.length) % slides.length
      );
      setAnimate(true);
    }, 50);
  };

  return (
    <div className="slider">
      <div
        className="slider__wrapper"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div className="slide" key={slide.id}>
            <div className="slide__content">
              
              <div className="slide__image">
                <img src={slide.img} alt="" />
              </div>

              <div className={`slide__text ${animate ? "animate" : ""}`}>
                <h4>{slide.subtitle}</h4>
                <h1>{slide.title}</h1>
                <p>{slide.desc}</p>
                <button>Shop Now</button>
              </div>

            </div>
          </div>
        ))}
      </div>

      <button className="arrow left" onClick={() => handleSlide("prev")}>
        ❮
      </button>

      <button className="arrow right" onClick={() => handleSlide("next")}>
        ❯
      </button>
    </div>
  );
}

export default Slider