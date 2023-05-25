import { useState } from "react";

export default function Page8() {
  const [show, setShow] = useState(false);
  return (
    <div className="screen" onClick={() => setShow(false)}>
      <div className="flex">
        <img src="images/9/images/img1.png" alt="img" />
        <div className="relative">
          <img
            src="images/9/images/img2.png"
            alt="img"
            className="animated fadeInRight d-1"
          />
          <img
            src="images/9/images/img3.png"
            alt="img"
            className="animated fadeInRight d-2 absolute bottom-0 right-0"
          />
        </div>
      </div>
      <div className="flex w-full">
        <img
          src="images/9/images/img4.png"
          alt="img"
          className="animated fadeInRight d-3"
        />
        <img
          src="images/9/images/img5.png"
          alt="img"
          className="animated zoomIn d-4"
        />
        <div className="flex flex-col">
          <img
            src="images/9/images/img6.png"
            alt="img"
            className="animated fadeInRight d-5"
          />
          <img
            src="images/9/images/img7.png"
            alt="img"
            className="animated fadeInRight d-6"
          />
          <img
            src="images/9/images/img8.png"
            alt="img"
            className="animated fadeInRight d-7"
          />
          <img
            src="images/9/images/img9.png"
            alt="img"
            className="animated fadeInRight d-8"
          />
        </div>
      </div>
      <div className={`refDiv ${show ? `show` : ""}`}>
        <div
          className="icon_ref"
          onClick={(e) => {
            e.stopPropagation();
            setShow(!show);
          }}
        ></div>
        <img src="images/9/images/ref.png" className="refImg" alt="img" />
      </div>
    </div>
  );
}
