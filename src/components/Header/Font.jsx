import React from "react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";
import { useEffect } from "react";

const Font = ({ isVisible, setIsVisible }) => {
  // const [isvisible, setIsVisible] = useState(false);

  // const fontModal = useRef(null);
  // useEffect(() => {
  //   const handleModalClose = (e) => {
  //     if (fontModal.current && !fontModal.current.contains(e.target)) {
  //       // setIsVisible(false);
  //       console.log(e.target);
  //       console.log(fontModal.current);
  //     }
  //   };
  //   handleModalClose();

  //   window.addEventListener("click", handleModalClose);
  //   window.removeEventListener("click", handleModalClose);
  // }, [setIsVisible]);

  return (
    <div className=" flex justify-between items-center gap-2 relative">
      <h3 className="text-sm lg:text-base font-semibold capitalize">
        san serif
      </h3>
      <button
        className="cursor-pointer"
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        <ChevronDown size={18} />
      </button>

      {isVisible && (
        <div
          className=" flex flex-col gap-2 absolute top-5 right-2 bg-white text-black text-center p-8 w-45 mt-2 shadow-lg border rounded-xl z-1000 "
          // ref={fontModal}
        >
          <h3 className="cursor-pointer">san serif</h3>
          <h3 className="cursor-pointer">serif</h3>
          <h3 className="cursor-pointer">mono</h3>
        </div>
      )}
    </div>
  );
};

export default Font;
