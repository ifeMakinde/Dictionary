import React from "react";
import { useState } from "react";
// import Yes from "./Yes";
import { motion } from "motion/react";

function Valentine({ isModalVisible, setIsModalVisible }) {
  const [noSize, setNoSize] = useState(1);
  const [yesSize, setYesSize] = useState(1);

  const handleNoClick = () => {
    setYesSize((prev) => Math.min(prev + 0.3, 6)); // cap growth
    setNoSize((prev) => Math.max(prev - 0.16, 0.3)); // don't vanish fully
  };

  const handleYesClick = (e) => {
    e.stopPropagation();
    setIsModalVisible(true);
    setNoSize(1);
    setYesSize(1);
    // setTimeout(() => {
    //   setIsModalVisible(false);
    // }, 5000);
  };

  return (
    <div
      
      className={`m-auto bg-pink-100 max-w-full h-screen text-center flex flex-col gap-3 justify-center item-center ${isModalVisible ? "" : ""}`}
    >
      <h1 className="text-3xl lg:text-5xl font-medium capitalize ">
        Asake, Will you be my
        <span className="text-pink-400  italic capitalize">
          <br />
          Valentine ?
        </span>
        😌❤️
      </h1>

      <div className=" py-6 flex flex-col lg:flex-row justify-center items-center text-center gap-4 lg:gap-6">
        <button
          style={{ transform: `scale(${yesSize})` }}
          className="text-[20px] text-white bg-pink-700 py-4 border border-pink-400 rounded-full w-30 cursor-pointer transition-all ease-in-out duration-700 "
          onClick={handleYesClick}
        >
          YES🥹❤️
        </button>

        <button
          style={{ transform: `scale(${noSize})` }}
          className="text-[20px] text-pink-400 p-2 bg-transparent border border-pink-400 rounded-full w-30 cursor-pointer"
          onClick={handleNoClick}
        >
          NO
        </button>
      </div>
    </div>
  );
}

export default Valentine;
