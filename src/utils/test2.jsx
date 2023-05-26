import { useState } from "react";

const Nav = ({ selectedPages }) => {
  const [active, setActive] = useState(false);
  const toggleMenu = () => {
    setActive(!active);
  };
  return (
    <nav className={`${active && "active"}`}>
      <div className={`nav_header `}>
        <button
          type="button"
          className="icon_hamburger"
          onClick={toggleMenu}
        ></button>
        <div to="/" className="icon_home"></div>
      </div>
      <div className={`nav_list `}>
        {selectedPages.map((item) => {
          return <div key={item.id}>{item.text}</div>;
        })}
      </div>
    </nav>
  );
};
export default Nav;
