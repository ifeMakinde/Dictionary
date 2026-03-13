import React from "react";
import Header from "./components/Header/Header";
import Search from "./components/Search";
import Main from "./components/Main/Main";
// import { GlobalContext } from "./components/Context/GlobalContext";

function App() {
  return (
    <div>
      <div className={`mt-6 lg:mt-8 relative`}></div>
      <Header />
      <Search />
      <Main />
    </div>
  );
}

export default App;
