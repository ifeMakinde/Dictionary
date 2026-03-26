import React, { useReducer } from "react";

function useBookmark() {
  const bookMarkFunc = (state, action) => {
    switch (action.type) {
      case "add":
        if (!state.includes(action.payload)) {
          localStorage.setItem(
            "bookMarks",
            JSON.stringify([...state, action.payload]),
          );
          return [...state, action.payload];
        }
        return state;

      case "remove": {
        const updated = state.filter((word) => word !== action.payload);
        localStorage.setItem("bookMarks", JSON.stringify(updated));
        return updated;
      }

      default:
        return [...state];
    }
  };

  const initialState = localStorage.getItem("bookMarks")
    ? JSON.parse(localStorage.getItem("bookMarks"))
    : [];

  const [bookmarks, dispatch] = useReducer(bookMarkFunc, initialState);
  return { bookmarks, dispatch };
}

export { useBookmark };
