import { useState, useContext } from "react";
import { SearchIcon, CircleAlert } from "lucide-react";
import { Context } from "./Context/GlobalContext";
import Button from "./Button";
import Toast from "./Toast";

function Search() {
  const [query, setQuery] = useState("");
  const { error, setError, searchedWord } = useContext(Context);

  // handlesForm submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!query.trim()) {
      setError("enter a word to search it's meaning");
      setTimeout(() => {
        setError("");
      }, 2000);
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
          className="bg-gray-50 font-bold p-3.5 rounded-xl w-full lg:w-[70%] xl:w-[60%] focus:outline-purple-600 focus:outline-[0.5px]"
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

      {error && (
        <Toast className="mt-2 flex justify-center gap-1 lg:justify-center items-center bg-white absolute top-0 left-[15%] lg:left-[30%] right-[20%] shadow-lg">
          <CircleAlert color="red" strokeWidth={1} />
          <h4 className=" text-[12px] lg:text-[14px]">{error}</h4>
        </Toast>
      )}
    </div>
  );
}

export default Search;
