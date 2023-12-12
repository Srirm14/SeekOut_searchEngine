import {  useRef } from "react";
import { searchSmall, close } from "../assets";
import { useResultContext } from "../Contexts/ResultContextProvider";

const Search = () => {
  const { searchTerm, setSearchTerm } = useResultContext();
  const userSearchTerm = useRef();

  const handleUserAction = () => {
    setSearchTerm(userSearchTerm.current.value);
  };

  

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") {
//       handleUserAction();
//     }
//     window.location.href = '/search';
//   };

  return (
    <span className="w-fit h-fit flex justify-between items-center gap-10  w-[400px] px-6 py-1 shadow-md bg-white rounded-full">
      <input
        className="text-sm font-light outline-none"
        placeholder="Search by keyword..."
        // value={searchTerm}
        ref={userSearchTerm}
        // onKeyDown={handleKeyDown}
      />
      <div className="flex justify-center items-center gap-3">
        <span>
          <button onClick={handleUserAction}>
            <img src={searchSmall} alt="logo" />
          </button>
        </span>
        <span>
          <p className="relative mb-1 text-gray-300 font-thin text-2xl"> |</p>
        </span>
        <span>
          <button>
            <img src={close} alt="logo" />
          </button>
        </span>
      </div>
    </span>
  );
};

export default Search;
