import { useState } from "react";
import Nav from "../components/Nav";

function Page10(props) {
  const [show, setShow] = useState(false);
  return (
    <div className="screen" onClick={() => setShow(false)}>
      {props.children}
      <div className="flex">
        <img src="images/11/images/img1.png" alt="img" />
        <div className="relative">
          <img
            src="images/11/images/img2.png"
            alt="img"
            className="animated fadeInRight d-1"
          />
          <img
            src="images/11/images/img3.png"
            alt="img"
            className="animated fadeInRight d-2 absolute bottom-0 right-0"
          />
        </div>
      </div>
      <img
        src="images/11/images/img4.png"
        alt="img"
        className="animated fadeInRight d-3"
      />
      <div className="flex mx-auto relative">
        <div className="flex absolute left-0 top-0">
          <img
            src="images/11/images/img6.png"
            alt="img"
            className="animated zoomIn d-5"
          />
          <img
            src="images/11/images/img7.png"
            alt="img"
            className="animated zoomIn d-6"
          />
          <img
            src="images/11/images/img8.png"
            alt="img"
            className="animated zoomIn d-7"
          />
        </div>
        <img
          src="images/11/images/img5.png"
          alt="img"
          className="animated fadeInRight d-4"
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
        <img src="images/11/images/ref.png" className="refImg" alt="img" />
      </div>
    </div>
  );
}
export default Nav(Page10);
