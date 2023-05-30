import { useContext, useState } from "react";
import { pages } from "./../utils";
import { AppContext } from "../context";
export default function Menu() {
  const { selectedPages, setSelectedPages } = useContext(AppContext);
  const handleChange = (e, item) => {
    if (e.target.checked) {
      setSelectedPages((prev) => {
        return [...prev, item];
      });
    } else {
      const removedPage = selectedPages.filter((p) => {
        return p.id !== item.id;
      });
      setSelectedPages(removedPage);
    }
  };

  return (
    <div className="screen menuBg">
      {pages.map((item, i) => {
        const [isChecked, setIsChecked] = useState(false);
        return (
          <label
            htmlFor={item.id}
            key={i}
            className={`brand-label ${item.text}`}
          >
            <input
              id={item.id}
              type="checkbox"
              value={item.text}
              onChange={(e) => {
                setIsChecked(e.target.checked);
                handleChange(e, item);
              }}
            />
            <img src={item.img} alt="img" />
            <span className={isChecked ? `show` : ""}></span>
          </label>
        );
      })}
      {/* <button onClick={() => setStarSlider(true)}>Start</button> */}
    </div>
  );
}
