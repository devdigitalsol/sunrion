import { useState } from "react";

export default function Page4() {
  const [show, setShow] = useState(false);
  return (
    <div className="screen" onClick={() => setShow(false)}>
      <div className="flex">
        <img src="images/5/images/img1.png" alt="img" />
        <div>
          <img
            src="images/5/images/img2.png"
            alt="img"
            className="animated fadeInRight d-1"
          />
          <img
            src="images/5/images/img3.png"
            alt="img"
            className="animated fadeInRight d-2"
          />
        </div>
      </div>
      <div className="flex mx-auto">
        <img
          src="images/5/images/img4.png"
          alt="img"
          className="animated zoomIn d-3"
        />
        <div>
          <img
            src="images/5/images/img5.png"
            alt="img"
            className="animated fadeInRight d-4"
          />
          <img
            src="images/5/images/img6.png"
            alt="img"
            className="animated fadeInRight d-5"
          />
        </div>
      </div>
      <div className="absolute bottom-0 right-0">
        <img src="images/5/images/img7.png" alt="img" />
      </div>
      <div className={`refDiv ${show ? `show` : ""}`}>
        <div
          className="icon_ref"
          onClick={(e) => {
            e.stopPropagation();
            setShow(!show);
          }}
        ></div>
        <img src="images/5/images/ref.png" className="refImg" alt="img" />
      </div>
    </div>
  );
}
