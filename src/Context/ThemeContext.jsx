import { useRef } from "react";
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

function ThemeContextProvider({ children }) {
  const [isActive, setIsActive] = useState(false);
  const html = useRef(document.documentElement);

  const Toggle = function () {
    setIsActive((prev) => !prev);
    html.current.classList.toggle("dark");
  };

  return (
    <ThemeContext.Provider value={{ isActive, Toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

const useTheme = function () {
  return useContext(ThemeContext);
};

export { useTheme, ThemeContextProvider };
