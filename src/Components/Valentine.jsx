import React from "react";
import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

function Valentine({ isModalVisible, setIsModalVisible }) {
  const [noSize, setNoSize] = useState(1);
  const [yesSize, setYesSize] = useState(1);

  const handleNoClick = () => {
    setYesSize((prev) => Math.min(prev + 0.3, 6)); // cap growth
    setNoSize((prev) => Math.max(prev - 0.1, 0.3)); // don't vanish fully
  };

  const handleYesClick = (e) => {
    e.stopPropagation();
    setIsModalVisible(true);
    setNoSize(1);
    setYesSize(1);
  };

  return (
    <div
      className={`m-auto bg-pink-100 max-w-full h-screen text-center flex flex-col gap-3 justify-center item-center ${isModalVisible ? "" : ""}`}
    >
      <motion.div
        initial={{ opacity: 0, y: "-50%" }}
        animate={{ opacity: 1, y: "0" }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <h1 className="text-3xl lg:text-5xl font-medium capitalize ">
          Asake, Will you be my
          <span className="text-pink-400  italic capitalize">
            <br />
            Valentine ?
          </span>
          😌❤️
        </h1>
      </motion.div>

      <div className=" py-6 flex flex-col lg:flex-row justify-center items-center text-center gap-4 lg:gap-6">
        <motion.button
          initial={{ opacity: 0, x: "-80%" }}
          animate={{ opacity: 1, x: 0, scale: yesSize }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: 1.7,
            scale: {
              duration: 0,
            },
          }}
          // style={{ transform: `scale(${yesSize})` }}
          className="text-[20px] text-white bg-pink-700 p-2 border border-pink-400 rounded-full w-30 cursor-pointer "
          onClick={handleYesClick}
        >
          YES
        </motion.button>

        <motion.button
          initial={{ opacity: 0, x: "80%" }}
          animate={{ opacity: 1, x: 0, scale: noSize }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: 1.7,
            scale: {
              duration: 0,
            },
          }}
          // style={{ transform: `scale(${noSize})` }}
          className="text-[20px] text-pink-400 p-2 bg-transparent border border-pink-400 rounded-full w-30 cursor-pointer"
          onClick={handleNoClick}
        >
          NO
        </motion.button>
      </div>
    </div>
  );
}

export default Valentine;
