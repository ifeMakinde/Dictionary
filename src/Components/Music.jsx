import React from "react";
import { useState, useRef, useEffect } from "react";
import { Pause } from "lucide-react";
import { Play } from "lucide-react";
import audio from "../assets/Fola-Caricature.mp3";

function Music() {
  const newAudio = useRef(new Audio(`${audio}`));

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    return () => {
      newAudio.current.pause();
      newAudio.current.currentTime = 0;
    };
  }, []);

  const togglePlay = () => {
    if (newAudio.current.paused) {
      setIsPlaying(true);
      newAudio.current.play();
    } else {
      newAudio.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="fixed right-3 bottom-10 transition-all duration-300 ease-in-out hover:-translate-y-5">
      <button
        className="h-16 w-16 rounded-full p-4 bg-pink-500 cursor-pointer "
        onClick={togglePlay}
      >
        {isPlaying ? (
          <Pause className="h-8 w-8 text-white" strokeWidth={1} />
        ) : (
          <Play className="h-8 w-8 text-white" strokeWidth={1} />
        )}
      </button>
    </div>
  );
}
export default Music;
