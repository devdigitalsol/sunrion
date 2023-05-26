import { useState } from "react";
import Nav from "../components/Nav";

function Page5(props) {
  const [show, setShow] = useState(false);
  return (
    <div className="screen" onClick={() => setShow(false)}>
      {props.children}
      <div className="flex">
        <img src="images/6/images/img1.png" alt="img" />
        <div className="relative">
          <img
            src="images/6/images/img2.png"
            alt="img"
            className="animated fadeInRight d-1"
          />
          <img
            src="images/6/images/img3.png"
            alt="img"
            className="animated fadeInRight d-2 absolute bottom-0 right-0"
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        <img
          src="images/6/images/img4.png"
          alt="img"
          className="animated fadeInRight d-3"
        />
        <div style={{ width: "512px" }}></div>
        <img
          src="images/6/images/img5.png"
          alt="img"
          className="animated fadeInRight d-4"
        />
        <img
          src="images/6/images/img6.png"
          alt="img"
          className="animated fadeInRight d-5"
        />
        <img
          src="images/6/images/img7.png"
          alt="img"
          className="animated fadeInRight d-6"
        />
        <img
          src="images/6/images/img8.png"
          alt="img"
          className="animated fadeInRight d-7"
        />
        <img
          src="images/6/images/img9.png"
          alt="img"
          className="animated fadeInRight d-8"
        />
      </div>
      <img
        src="images/6/images/img10.png"
        alt="img"
        className="absolute bottom-0 right-0 animated fadeInRight d-9"
      />
      <div className={`refDiv ${show ? `show` : ""}`}>
        <div
          className="icon_ref"
          onClick={(e) => {
            e.stopPropagation();
            setShow(!show);
          }}
        ></div>
        <img src="images/6/images/ref.png" className="refImg" alt="img" />
      </div>
    </div>
  );
}
export default Nav(Page5);
