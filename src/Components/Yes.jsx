import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import gif from "../assets/yume-nikki.gif";

function Yes({ onClose }) {
  const yesModal = useRef(null);

  useEffect(() => {
    const handleModalClose = (event) => {
      if (yesModal.current && !yesModal.current.contains(event.target)) {
        onClose();
      }
    };

    window.addEventListener("click", handleModalClose);

    return () => {
      window.removeEventListener("click", handleModalClose);
    };
  }, [onClose]);

  return (
    <div
      className="fixed z-50 flex flex-col gap-2 justify-center items-center max-w-100 m-auto shadow-3xl text-center rounded-lg py-20 px-10 top-[25%] bottom-[15%] left-8 right-8 lg:top-35 lg:bottom-30  lg:left-8 lg:right-10 bg-white"
      ref={yesModal}
    >
      <h3 className=" text-[28px] lg:text-[32px] font-bold italic">
        {" "}
        yay!✨❤️✨
      </h3>
      <div className="h-30 lg:h-45 ">
        <img src={gif} alt="" className="h-full object-center object-cover" />
      </div>
      <h2 className="text-lg text-pink-500  text-[20px] lg:text-[24px] capitalize">
        happy valentine's day my love
      </h2>

      <button
        className=" py-2 px-4 rounded-2xl bg-[#f0eeee] text-sm lg:text-md "
        onClick={() => {
          onClose();
        }}
      >
        <a href="#memories" className="text-in">
          {" "}
          take a quick scroll 👀
        </a>
      </button>
    </div>
  );
}

export default Yes;
