import React from "react";
import { useContext } from "react";
import { Context } from "../../Context/GlobalContext";
import { Trash2 } from "lucide-react";
import Button from "../Button";

function BookmarkContent() {
  const { dispatch, searchedWord, bookmarks, setIsBookMarkActive, setQuery } =
    useContext(Context);

  const handleDelete = (bookmark) => {
    dispatch({ type: "remove", payload: bookmark });
  };
  return (
    <>
      {bookmarks.map((bookmark, i) => (
        <div
          key={i}
          className="flex text-center justify-between items-center p-3 pb-0 gap-[1.5] hover:bg-gray-50 dark:hover:bg-transparent"
        >
          <h3
            className="cursor-pointer"
            onClick={() => {
              setQuery(bookmark);
              searchedWord(bookmark);
              setIsBookMarkActive(false);
            }}
          >
            {bookmark}
          </h3>

          <Button
            className="cursor-pointer"
            onClick={() => handleDelete(bookmark)}
          >
            <Trash2 color="red" strokeWidth={1} size={20} />
          </Button>
        </div>
      ))}
    </>
  );
}

export default BookmarkContent;
