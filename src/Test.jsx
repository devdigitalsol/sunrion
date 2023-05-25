import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation, Manipulation } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Navigation, Manipulation]);

export default function App() {
  let appendNumber = 4;

  const [swiperRef, setSwiperRef] = useState(null);

  const append = () => {
    swiperRef.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
    );
  };
  const remove = () => {
    swiperRef.removeSlide(0);
  };

  return (
    <>
      <Swiper
        onSwiper={(swiper) => setSwiperRef(swiper)}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>

      <p className="append-buttons">
        <button onClick={() => append()} className="append-slide">
          Append Slide
        </button>
        <button onClick={() => remove()} className="append-slide">
          Remove Slide
        </button>
      </p>
    </>
  );
}
