import "./App.css";
import { useState } from "react";
import Valentine from "./Components/Valentine";
import Music from "./Components/Music";
import Memories from "./Components/Memories";
import Yes from "./Components/Yes";
import Letter from "./Components/Letter";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <div
        className={`relative ${isModalVisible ? "blur-lg shadow-background" : "blur-none"}`}
      >
        <Valentine
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        />
        <Memories />
        <Music />
        <Letter />
      </div>

      {isModalVisible && (
        <Yes
          isOpen={isModalVisible}
          onClose={() => {
            setIsModalVisible(false);
          }}
        />
      )}
    </>
  );
}

export default App;
