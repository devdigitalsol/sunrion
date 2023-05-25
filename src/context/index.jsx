import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppState = ({ children }) => {
  const [selectedPages, setSelectedPages] = useState([]);
  const [starSlider, setStarSlider] = useState(false);
  const store = {
    selectedPages,
    setSelectedPages,
    starSlider,
    setStarSlider,
  };
  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
};
