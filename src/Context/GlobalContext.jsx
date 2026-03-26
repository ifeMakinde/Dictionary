import { createContext, useState } from "react";
import { useAxiosHook } from "../Hook/useAxiosHook";
import { useBookmark } from "../Hook/useBookmark";

// eslint-disable-next-line react-refresh/only-export-components
export const Context = createContext();

export function GlobalContext({ children }) {
  const [isActive, setIsActive] = useState(false);
  const [isBookMarkActive, setIsBookMarkActive] = useState(false);
  const [query, setQuery] = useState("");
  const [toast, setToast] = useState({
    message: "",
    type: "error",
    show: false,
  });
  const { bookmarks, dispatch } = useBookmark();
  const {
    isLoading,
    setIsloading,
    error,
    setError,
    searchedWord,
    searchedWordData,
  } = useAxiosHook();

  const showToast = (message, type = "info", duration = 3000) => {
    setToast({ message, type, show: true });
    if (duration) {
      setTimeout(() => {
        setToast({ message: "", type: "info", show: false });
      }, duration);
    }
  };

  return (
    <Context.Provider
      value={{
        isActive,
        setIsActive,
        isBookMarkActive,
        setIsBookMarkActive,
        query,
        setQuery,
        isLoading,
        setIsloading,
        error,
        setError,
        searchedWord,
        searchedWordData,
        bookmarks,
        dispatch,
        toast,
        setToast,
        showToast,
      }}
    >
      {children}
    </Context.Provider>
  );
}
