import React from "react";
import { AudioLines, Bookmark } from "lucide-react";
import Button from "../Button";
import Divider from "../Divider";
import { useContext } from "react";
import { Context } from "../../Context/GlobalContext";
import { useAudio } from "../../Hook/useAudio";

function MainContent() {
  const {
    dispatch,
    searchedWord,
    searchedWordData,
    setQuery,
    bookmarks,
    showToast,
  } = useContext(Context);
  const { isPlaying, play } = useAudio();
  const {
    // license,
    meanings, // an array of objects that contains the meaning of the word in different parts of speech
    phonetic,
    phonetics, //an array of objects that contains the phonetic and audio of the word
    word,
  } = searchedWordData;

  const isBookmarked = bookmarks.includes(word);

  const handleBookMark = () => {
    const newBookmarkState = !isBookmarked;
    dispatch({
      type: newBookmarkState ? "add" : "remove",
      payload: word,
    });
    showToast(
      newBookmarkState
        ? `word added to bookmarks!`
        : `word removed from bookmarks`,
      "success",
      2500,
    );
  };
  return (
    <section className="max-w-full text-start p-4">
      {/* Word, Audio, and Phonetics */}
      <div className="flex justify-between items-center ">
        <div className="flex flex-col gap-5 justify-center items-start">
          <h2 className="text-4xl lg:text-6xl font-bold">{word}</h2>
          <p className="font-semibold text-purple-600 text-base lg:text-[18px]">
            {phonetic}
          </p>
        </div>

        {/* audio button and bookmark container */}
        <div className="flex flex-col items-center gap-4">
          {phonetics[0]?.audio && (
            <Button
              className=" group rounded-full bg-purple-300 p-3 hover:bg-purple-700 focus:bg-purple-700 lg:p-4 text-center "
              onClick={play}
            >
              <AudioLines
                size={28}
                strokeWidth={1.7}
                className="text-purple-700 group-hover:text-white group-focus:text-white transition-colors"
              />
            </Button>
          )}
          <Button onClick={handleBookMark}>
            <Bookmark
              size={28}
              color="gray"
              fill={isBookmarked ? "#ad46ff" : "transparent"}
              strokeWidth={1.2}
              className=" cursor-pointer"
            />
          </Button>
        </div>
      </div>

      {/* meaning/ NOUN */}
      {meanings[0].partOfSpeech && (
        <div className="flex flex-col gap-3 mt-4">
          {/* parts of speech */}
          <div className="flex justify-center items-center gap-2">
            <h2 className="italic font-bold text-base ">
              {meanings[0].partOfSpeech}
            </h2>
            <Divider />
          </div>

          {/* definitions */}
          <div>
            <h3 className="text-[#666] capitalize">meanings</h3>
            {meanings[0].definitions.map((def, index) => (
              <ul key={index} className="list-disc list-sty ml-4 p-2">
                <li className="text-sm lg:text-[14px]">{def.definition}</li>
                <p className="text-gray-500 text-12px lg:text-[14px]">
                  {def?.example}
                </p>
              </ul>
            ))}
          </div>

          {/* synonyms */}
          {meanings[0].synonyms?.length > 0 && (
            <div className="flex gap-2">
              <h3 className="capitalize text-gray-500">synonyms</h3>
              <li className="flex gap-2 flex-wrap">
                {meanings[0].synonyms.map((synonym, i) => (
                  <a
                    key={i}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:underline cursor-pointer"
                    onClick={() => {
                      setQuery(synonym);
                      searchedWord(synonym);
                    }}
                  >
                    {synonym}
                  </a>
                ))}
              </li>
            </div>
          )}
        </div>
      )}
    </section>
  );
}

export default MainContent;
