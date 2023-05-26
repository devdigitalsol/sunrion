import { useContext, useState } from "react";
import { useSwiper } from "swiper/react";
import { AppContext } from "../context";

function Nav(WrappedComp) {
  function Pages(props) {
    const { selectedPages, allSlides } = useContext(AppContext);
    const swiper = useSwiper();
    const [active, setActive] = useState(false);
    const toggleMenu = () => {
      setActive(!active);
    };
    return (
      <WrappedComp {...props}>
        <nav className={`${active && "active"}`}>
          <div className={`nav_header `}>
            <button
              type="button"
              className="icon_hamburger"
              onClick={toggleMenu}
            ></button>
            <div onClick={() => swiper.slideTo(0)} className="icon_home"></div>
          </div>
          <div className={`nav_list `}>
            {selectedPages.map((item, i) => {
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    const gotoIndex = allSlides.findIndex(
                      (slide) => slide.text === item.text
                    );
                    swiper.slideTo(gotoIndex + 1);
                  }}
                >
                  {item.text}
                </div>
              );
            })}
          </div>
        </nav>
      </WrappedComp>
    );
  }
  return Pages;
}
export default Nav;
