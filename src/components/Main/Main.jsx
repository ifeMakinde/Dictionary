import React from "react";
import DefaultState from "./DefaultState";
import MainContent from "./MainContent";
import { useContext } from "react";
import { Context } from "../Context/GlobalContext";
import Loader from "../Loader";

function Main() {
  const { isLoading, error, searchedWordData } = useContext(Context);
  return (
    <main className="m-auto max-w-[95%] md:max-w-[70%] lg:max-w-[55%] xl:max-w-[50%] mt-8">
      {isLoading && <Loader />}
      {!isLoading && !searchedWordData.word && <DefaultState />}
      {!isLoading && searchedWordData.word && <MainContent />}
    </main>
  );
}

export default Main;
