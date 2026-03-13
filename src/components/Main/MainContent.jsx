import React from "react";
import { AudioLines, Bookmark } from "lucide-react";
import Button from "../Button";
import Divider from "../Divider";
import { useContext } from "react";
import { Context } from "../Context/GlobalContext";

function MainContent() {
  const { searchedWordData } = useContext(Context);
  const {
    license,
    meanings, // an array of objects that contains the meaning of the word in different parts of speech
    phonetic,
    phonetics, //an array of objects that contains the phonetic and audio of the word
    word,
  } = searchedWordData;
  return (
    <section className="max-w-full text-start p-4">
      {/* Word, Audio, and Phonetics */}
      <div className="flex justify-between items-center ">
        <div className="flex flex-col gap-5 justify-center items-start">
          <h2 className="text-3xl lg:text-5xl font-bold">{word}</h2>
          <p className="font-semibold text-purple-600 text-base lg:text-[18px]">
            {phonetic}
          </p>
        </div>

        {/* audio button and bookmark container */}
        <div className="flex flex-col items-center gap-4">
          {phonetics[0]?.audio && (
            <Button className="rounded-full bg-purple-200 hover:bg-purple-700 p-3 lg:p-4 text-center">
              <AudioLines
                size={28}
                strokeWidth={1}
                className="text-black hover:text-white"
              />
            </Button>
          )}
          <Button>
            {<Bookmark size={28} color="grey" strokeWidth={1.5} />}
          </Button>
        </div>
      </div>

      {/* meaning/ NOUN */}
      {meanings[0].partOfSpeech && (
        <div className="flex flex-col gap-3 mt-4">
          {/* parts of speech */}
          <div className="flex item-center gap-1">
            <h2 className="italic font-bold  text-base ">
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
              <li className="flex flex-wrap gap-2">
                {meanings[0].synonyms.map((synonym) => (
                  <a
                    key={synonym}
                    href={`https://api.dictionaryapi.dev/api/v2/entries/en/${synonym}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:underline "
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
