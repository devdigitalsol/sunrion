import { useState } from "react";
import Nav from "../components/Nav";

function Page11(props) {
  const [show, setShow] = useState(false);
  return (
    <div className="screen" onClick={() => setShow(false)}>
      {props.children}
      <div className="flex">
        <img src="images/12/images/img1.png" alt="img" />
        <div className="absolute top-0 right-0">
          <img
            src="images/12/images/img2.png"
            alt="img"
            className="animated fadeInRight d-1"
          />
        </div>
      </div>
      <img
        src="images/12/images/img3.png"
        alt="img"
        className="animated fadeInRight d-2"
      />
      <img
        src="images/12/images/img4.png"
        alt="img"
        className="animated fadeInUp d-3"
      />
      <div className="absolute bottom-0 right-0">
        <img
          src="images/12/images/img5.png"
          alt="img"
          className=" animated fadeInRight d-4"
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
        <img src="images/12/images/ref.png" className="refImg" alt="img" />
      </div>
    </div>
  );
}
export default Nav(Page11);
