import React, { useContext } from "react";
import Header from "./components/Header/Header";
import Search from "./components/Search";
import Main from "./components/Main/Main";
import { Context } from "./Context/GlobalContext";
import Toast from "./components/Toast";

function App() {
  const { toast, setToast } = useContext(Context);

  return (
    <div className="min-h-screen bg-primary dark:bg-primary-dark dark:text-white">
      <div className={`pt-8 lg:pt-16 relative`}></div>
      <Header />
      <Search />
      <Main />

      {/* Global Toast Container */}
      {toast.show && (
        <div className="fixed top-4 right-4 z-1000">
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast({ ...toast, show: false })}
            autoClose={false}
          />
        </div>
      )}
    </div>
  );
}

export default App;
