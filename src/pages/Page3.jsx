import { useState } from "react";
import Nav from "../components/Nav";

function Page3(props) {
  const [show, setShow] = useState(false);
  return (
    <div className="screen" onClick={() => setShow(false)}>
      {props.children}
      <div>
        <img src="images/4/images/img1.png" alt="img" />
      </div>
      <div className="flex flex-col absolute right-0 top-0 justify-start items-end">
        <img
          src="images/4/images/img2.png"
          alt="img"
          className="animated fadeInRight d-1"
        />
        <img
          src="images/4/images/img3.png"
          alt="img"
          className="animated fadeInRight d-2"
        />
      </div>
      <div className="flex flex-wrap">
        <div className="flex flex-wrap">
          <img
            src="images/4/images/img4.png"
            alt="img"
            className="animated fadeInRight d-3"
          />
          <img
            src="images/4/images/img5.png"
            alt="img"
            className="animated fadeInRight d-4"
          />
          <img
            src="images/4/images/img6.png"
            alt="img"
            className="animated fadeInRight d-5"
          />
          <img
            src="images/4/images/img7.png"
            alt="img"
            className="animated fadeInRight d-6"
          />
        </div>
      </div>
      <div className="absolute bottom-0 right-0">
        <img
          src="images/4/images/img8.png"
          alt="img"
          className=" animated fadeInRight d-8"
        />
        <img src="images/4/images/img9.png" alt="img" />
      </div>
      <img
        src="images/4/images/img10.png"
        alt="img"
        className="absolute left-0 bottom-0"
      />
      <div className={`refDiv ${show ? `show` : ""}`}>
        <div
          className="icon_ref"
          onClick={(e) => {
            e.stopPropagation();
            setShow(!show);
          }}
        ></div>
        <img src="images/4/images/ref.png" className="refImg" alt="img" />
      </div>
    </div>
  );
}
export default Nav(Page3);
