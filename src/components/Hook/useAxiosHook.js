import axios from "axios";
import { useState } from "react";

const BASE_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

export function useAxiosHook() {
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState("");
  const [searchedWordData, setSearchedWordData] = useState({});

  // function passed as object to the app comp and as prop to search component to be called when the form is submitted..
  const searchedWord = async function (query) {
    console.log("the console ISNT WORKING");
    console.log("query recived : ", query);
    if (typeof query !== "string" || query.length < 1) return; //checks if the search exist and if it does if it's greater than 1 character...

    try {
      setIsloading(true);
      const response = await axios.get(`${BASE_URL}${query}`);
      if (!response.ok) 
        setError("something went wrong, please try again");

      
      setSearchedWordData(response.data[0]);
    } catch (error) {
      console.error(`Error fetching word: ${error.message}`);
      setError("SOMETHING WENT WRONG");
    } finally {
      setIsloading(false);
      setError("");
    }
  };

  return {
    isLoading,
    setIsloading,
    error,
    setError,
    searchedWord,
    searchedWordData,
  };
}
