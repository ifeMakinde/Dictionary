import React from "react";
import DefaultState from "./DefaultState";
import MainContent from "./MainContent";
import { useContext } from "react";
import { Context } from "../../Context/GlobalContext";
import Loader from "../Loader";
import Toast from "../Toast";

function Main() {
  const { isLoading, error, searchedWordData, setError } = useContext(Context);
  return (
    <main className="m-auto max-w-[95%] md:max-w-[70%] lg:max-w-[55%] xl:max-w-[50%] mt-8">
      {isLoading && <Loader />}
      {error && (
        <div className="fixed top-4 right-4 z-1000">
          <Toast message={error} type="error" onClose={() => setError("")} />
        </div>
      )}
      {!isLoading && !searchedWordData.word && <DefaultState />}
      {!isLoading && searchedWordData.word && <MainContent />}
      {/* {!(<Toast>{error}</Toast>) && <DefaultState />} */}
    </main>
  );
}

export default Main;
