import { useState } from "react";

export default function Page16() {
  const [show, setShow] = useState(false);
  return (
    <div className="screen" onClick={() => setShow(false)}>
      <div className="flex">
        <img src="images/17/images/img1.png" alt="img" />
        <div>
          <img
            src="images/17/images/img2.png"
            alt="img"
            className="animated fadeInRight d-1"
          />
          <img
            src="images/17/images/img3.png"
            alt="img"
            className="animated fadeInRight d-2"
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        <img
          src="images/17/images/img4.png"
          alt="img"
          className="animated fadeInRight d-3"
        />
        <img
          src="images/17/images/img5.png"
          alt="img"
          className="animated fadeInRight d-4"
        />
        <img
          src="images/17/images/img6.png"
          alt="img"
          className="animated fadeInRight d-5"
        />
      </div>
      <div className={`refDiv ${show ? `show` : ""}`}>
        <div
          className="icon_ref"
          onClick={(e) => {
            e.stopPropagation();
            setShow(!show);
          }}
        ></div>
        <img src="images/17/images/ref.png" className="refImg" alt="img" />
      </div>
    </div>
  );
}
