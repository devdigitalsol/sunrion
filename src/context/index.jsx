import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppState = ({ children }) => {
  const [selectedPages, setSelectedPages] = useState([]);
  const [starSlider, setStarSlider] = useState(false);
  const [allSlides, setAllSlides] = useState([]);
  const store = {
    selectedPages,
    setSelectedPages,
    starSlider,
    setStarSlider,
    allSlides,
    setAllSlides,
  };
  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
};
