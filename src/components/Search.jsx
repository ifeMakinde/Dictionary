import { useContext } from "react";
import { SearchIcon } from "lucide-react";
import { Context } from "../Context/GlobalContext";
import Button from "./Button";
import Toast from "./Toast";

function Search() {
  const { query, setQuery, searchedWord, showToast } = useContext(Context);

  // handlesForm submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!query.trim()) {
      showToast("Enter a word to search its meaning", "warning", 2500);
      return;
    }
    searchedWord(query); //calling the function passed as prop from app component.
    console.log("SUBMIT TRIGGERED");
  };

  return (
    <div className="text-center m-auto max-w-[90%] lg:max-w-[80%] mt-6">
      <form
        action=""
        onSubmit={handleSubmit}
        className="relative flex justify-center items-center"
      >
        <input
          type="text"
          value={query}
          placeholder="Search for any word..."
          className="bg-gray-50 dark:text-black font-bold p-4 rounded-xl w-full lg:w-[70%] xl:w-[60%] focus:outline-purple-600 focus:outline-[0.5px]"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />

        <Button
          type="submit"
          className=" cursor-pointer absolute right-5 lg:right-45 xl:right-70 "
        >
          <SearchIcon
            strokeWidth={1}
            size={22}
            color="oklch(62.7% 0.265 303.9)"
          />
        </Button>
      </form>
    </div>
  );
}

export default Search;
