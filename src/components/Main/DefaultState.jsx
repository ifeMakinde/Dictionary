import React from "react";
import { Book } from "lucide-react";
import { Context } from "../../Context/GlobalContext";
import Toast from "../Toast";

function DefaultState() {
  return (
    <div className="text-center max-w-200 lg:max-w-150 m-auto p-4 mt-6 text-gray-500 flex flex-col justify-center items-center gap-4">
      <div className="p-4">
        <Book size={42} strokeWidth={0.7} color="#888" />
      </div>

      <div className="flex flex-col justify-between items-center gap-3">
        <h2 className="font-bold text-[#161616] dark:text-white text-[20px] lg:text-[24px]">
          Welcome to Dictionary App
        </h2>
        <p className="text-[12px] md:text-[14px] lg:text-base">
          type any word into the search box to find its meaning, pronunciation,
          see its transcription, discover similar words,plus more helpful
          details-all in one place
        </p>
      </div>
      <br />
    </div>
  );
}

export default DefaultState;
