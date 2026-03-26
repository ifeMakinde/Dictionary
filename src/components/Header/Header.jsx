import React, { useState, useContext } from "react";
import { Book, Bookmark, ToggleRight, ToggleLeft } from "lucide-react";
import Button from "../Button";
import Font from "./Font";
import BookMark from "../Bookmark/Bookmark";
import { Context } from "../../Context/GlobalContext";
import { useTheme } from "../../Context/ThemeContext";

function Header() {
  const { isBookMarkActive, setIsBookMarkActive } = useContext(Context);
  const { isActive, Toggle } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  // const [isBookMarkActive, setIsBookMarkActive] = useState(false);

  return (
    <header className="flex justify-between lg:justify-around items-center m-auto w-full md:w-[80%] lg:w-[85%] px-6">
      <div>
        <Book size={42} strokeWidth={0.7} color="#888" />
      </div>

      <div className="flex gap-3 justify-between items-center ml-3">
        <Font isVisible={isVisible} setIsVisible={setIsVisible} />

        <Button
          className={`relative`}
          onClick={() => {
            setIsBookMarkActive(!isBookMarkActive);
          }}
        >
          <Bookmark
            size={24}
            strokeWidth={1}
            className={`${isBookMarkActive ? "fill-purple-500 text-transparent" : "fill-transparent"} cursor-pointer `}
          />
        </Button>

        <Button onClick={() => Toggle()}>
          {isActive ? (
            <ToggleRight size={24} strokeWidth={1} className="cursor-pointer" />
          ) : (
            <ToggleLeft size={24} strokeWidth={1} className="cursor-pointer" />
          )}
        </Button>
      </div>

      {isBookMarkActive && <BookMark />}
    </header>
  );
}

export default Header;
