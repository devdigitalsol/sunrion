import VIDEO from "../assets/images/cover.mp4";
import { useSwiper } from "swiper/react";
export default function Cover({ children }) {
  const swiper = useSwiper();
  return (
    <div className="screen">
      {children}
      <video
        width="1024"
        height="768"
        playsInline
        autoPlay
        webkit-playsinline="webkit-playsinline"
        onEnded={(e) => swiper.slideTo(1)}
      >
        <source src={VIDEO} type="video/mp4" />
      </video>
    </div>
  );
}
