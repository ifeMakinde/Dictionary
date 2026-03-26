import { useContext } from "react";
import { Context } from "../../Context/GlobalContext";
import { Folder } from "lucide-react";

import BookmarkContent from "./BookmarkContent";

function BookMark() {
  const { bookmarks } = useContext(Context);
  return (
    <div className=" m-auto max-w-[85%] lg:max-w-[45%] p-4 bg-white dark:bg-black dark:text-white flex flex-col gap-2 absolute right-0 top-20 lg:top-25 left-0 text-black text-center border dark:border-purple-700 shadow-lg rounded-[15px] z-1000 overflow-y-scroll h-55 animate-in transition-all fade-in duration-600 ease-in-out zoom-in-50 ">
      <h2 className="font-bold text-[20px] p-3">Bookmarks</h2>

      {/* if the bookmark lenght is grater than 1 render it, otherwise, render that state */}
      {bookmarks.length === 0 ? (
        <div className="flex flex-col items-center gap-2">
          <Folder size={40} color="yellow" fill="yellow" />
          <p className="text-gray-500 text-[14px]">No bookmarks added yet.</p>
        </div>
      ) : (
        <BookmarkContent />
      )}
    </div>
  );
}

export default BookMark;
