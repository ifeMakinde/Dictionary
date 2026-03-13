import { createContext, useState } from "react";
import { useAxiosHook } from "../Hook/useAxiosHook";

// eslint-disable-next-line react-refresh/only-export-components
export const Context = createContext();
export function GlobalContext({ children }) {
  const [isActive, setIsActive] = useState(false);
  const {
    isLoading,
    setIsloading,
    error,
    setError,
    searchedWord,
    searchedWordData,
  } = useAxiosHook();

  return (
    <Context.Provider
      value={{
        isActive,
        setIsActive,
        isLoading,
        setIsloading,
        error,
        setError,
        searchedWord,
        searchedWordData,
      }}
    >
      {children}
    </Context.Provider>
  );
}
