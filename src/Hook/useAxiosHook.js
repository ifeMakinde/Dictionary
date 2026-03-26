import axios from "axios";
import { useState } from "react";

const BASE_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

export function useAxiosHook() {
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState("");
  const [searchedWordData, setSearchedWordData] = useState({});

  // function passed as object to the app comp and as prop to search component to be called when the form is submitted..
  const searchedWord = async function (query) {
    if (typeof query !== "string" || query.length < 1) return; //checks if the search exist and if it does if it's greater than 1 character...

    try {
      setIsloading(true);
      setError("");
      const response = await axios.get(`${BASE_URL}${query}`);
      setSearchedWordData(response.data[0]);
    } catch (error) {
      let errorMessage;
      // Handle different error types
      if (!error.response) {
        // Network error - no response from server
        errorMessage =
          "Something went wrong. Please check your internet connection.";
      } else if (error.response.status === 404) {
        errorMessage = "Word not found ";
        // errorMessage = "";
      }

      setError(errorMessage);
      // console.error(`Error fetching word: ${errorMessage}`, error);
    } finally {
      setIsloading(false);
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
