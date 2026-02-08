import React from "react";
import { useState } from "react";
import LetterContent from "./LetterContent";
import closedLetter from "../assets/love-letter-closed.png";
import OpenedLetter from "../assets/love-letter-open.png";

function Letter() {
  const [isVisible, setIsVisible] = useState(false);
  const handleOpenLetter = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="py-20 bg-pink-100">
      <div className="m-auto max-w-300 text-center flex flex-col gap-4 justify-center items-center">
        <div
          className="flex flex-col gap-3 justify-center items-center"
          id="memories"
        >
          <h3 className="text-4xl lg:text-5xl font-medium capitalize italic">
            My <span className="text-pink-400">Letter</span>
          </h3>
          <p className="text-base lg:text-xl w-80 lg:w-100 text-pink-500 font-light">
            Here's everything i never said
          </p>
        </div>

        <button
          className={` ${isVisible ? "hidden" : "block"} text-base text-white bg-pink-700 p-3 border border-pink-400  rounded-full  `}
        >
          {isVisible ? "" : `click the envelope for a surprise  `}
        </button>

        <div
          className="h-45 lg:h-60 p-6 cursor-pointer "
          onClick={handleOpenLetter}
        >
          {isVisible ? (
            <img
              src={OpenedLetter}
              alt="Open letter content"
              className="h-50 lg:h-65 object-center object-cover  "
            />
          ) : (
            <img
              src={closedLetter}
              alt="Closed letter content"
              className="h-50 lg:h-70 object-center object-cover "
            />
          )}
        </div>

        {isVisible && <LetterContent />}
      </div>
    </div>
  );
}

export default Letter;
