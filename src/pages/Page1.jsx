import { useState } from "react";

export default function Page1() {
  const [show, setShow] = useState(false);
  return (
    <div className="screen" onClick={() => setShow(false)}>
      <div className="flex">
        <img src="images/2/images/img1.png" alt="img" />
        <div>
          <img
            src="images/2/images/img2.png"
            alt="img"
            className="animated fadeInRight d-1"
          />
          <img
            src="images/2/images/img3.png"
            alt="img"
            className="animated fadeInRight d-2"
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        <img
          src="images/2/images/img4.png"
          alt="img"
          className="animated fadeInRight d-3"
        />
        <img
          src="images/2/images/img5.png"
          alt="img"
          className="animated fadeInRight d-4"
        />
        <img
          src="images/2/images/img6.png"
          alt="img"
          className="animated fadeInRight d-5"
        />
        <img
          src="images/2/images/img7.png"
          alt="img"
          className="animated fadeInRight d-6"
        />
        <img
          src="images/2/images/img8.png"
          alt="img"
          className="animated fadeInRight d-7"
        />
      </div>
      <div className="absolute bottom-0 right-0">
        <img
          src="images/2/images/img9.png"
          alt="img"
          className="animated fadeInRight d-8"
        />
        <img src="images/2/images/img10.png" alt="img" />
      </div>
      <div className={`refDiv ${show ? `show` : ""}`}>
        <div
          className="icon_ref"
          onClick={(e) => {
            e.stopPropagation();
            setShow(!show);
          }}
        ></div>

        <img src="images/2/images/ref.png" className={`refImg `} alt="img" />
      </div>
    </div>
  );
}
