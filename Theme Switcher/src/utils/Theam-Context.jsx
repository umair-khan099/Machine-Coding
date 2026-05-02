import {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export const TheamContext = createContext();

export const useTheme = () => {
  return useContext(TheamContext);
};

export const TheamProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [isDarkMode]);
  const theme = isDarkMode ? "dark" : "light";
  return (
    <TheamContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </TheamContext.Provider>
  );
};
