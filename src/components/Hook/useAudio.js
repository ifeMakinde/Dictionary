import React, { useRef, useEffect, useState, useContext } from "react";
import { Context } from "../Context/GlobalContext";

function useAudio() {
  const { searchedWordData } = useContext(Context);
  const { phonetics } = searchedWordData;
  const audioUrl = phonetics[0].audio;
  const audioRef = useRef(new Audio(`${audioUrl}`));

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    return () => {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    };
  }, []);

  const play = () => {
    if (audioRef.current.paused) {
      setIsPlaying(true);
      audioRef.current.play();
    } else {
      audioRef.current.paused();
      setIsPlaying(false);
    }
  };

  return { isPlaying, play };
}

export { useAudio };
