import VIDEO from "../assets/images/cover.mp4";
import { useSwiper } from "swiper/react";
import VIDBG from "./../assets/poster.jpg";
export default function Cover({ children }) {
  const swiper = useSwiper();
  return (
    <div className="screen">
      {children}
      <video
        playsInline
        autoPlay
        muted
        poster={VIDBG}
        webkit-playsinline="webkit-playsinline"
        onEnded={(e) => swiper.slideTo(1)}
      >
        <source src={VIDEO} type="video/mp4" />
      </video>
    </div>
  );
}
