import { useEffect, useRef } from "react";
import VIDEO from "../assets/images/cover.mp4";
import VIDBG from "./../assets/poster.jpg";
export default function Cover({ children, playvid }) {
  const vidRef = useRef(null);
  useEffect(() => {
    if (playvid) {
      vidRef.current.play();
    } else {
      vidRef.current.pause();
      vidRef.current.currentTime = 0;
    }
  }, [playvid]);
  return (
    <div className="screen">
      {children}
      <video
        ref={vidRef}
        playsInline
        poster={VIDBG}
        webkit-playsinline="webkit-playsinline"
        width="1024"
        height="768"
      >
        <source src={VIDEO} type="video/mp4" />
      </video>
    </div>
  );
}
