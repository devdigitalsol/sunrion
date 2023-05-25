import React, { useContext, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Navigation, Manipulation, EffectFade } from "swiper";
import Cover from "./pages/Cover";
import Menu from "./pages/Menu";
import { AppContext } from "./context";
import Nav from "./components/Nav";

SwiperCore.use([Manipulation]);
export default function App() {
  const [activePage, setActivePage] = useState(0);
  const swiperElRef = useRef();
  const [slides, setSlides] = useState([
    { id: "cover", page: Cover },
    { id: "menu", page: Menu },
  ]);
  const { selectedPages } = useContext(AppContext);
  useEffect(() => {
    let result = selectedPages.map((a) => a.innerPages).flat();
    setSlides([...result]);
  }, [selectedPages]);

  return (
    <>
      {activePage > 1 ? <Nav selectedPages={selectedPages} /> : ""}
      <Swiper
        ref={swiperElRef}
        slidesPerView={1}
        effect={"fade"}
        centeredSlides={true}
        spaceBetween={0}
        navigation={false}
        className="mySwiper"
        modules={[Navigation, EffectFade]}
        onActiveIndexChange={(SwiperCore) => {
          setActivePage(SwiperCore.activeIndex);
        }}
      >
        <SwiperSlide>
          <Cover />
        </SwiperSlide>
        <SwiperSlide>
          <Menu />
        </SwiperSlide>
        {slides.map((slide) => {
          return <SwiperSlide key={slide.id}>{slide.page}</SwiperSlide>;
        })}
      </Swiper>
    </>
  );
}
