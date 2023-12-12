import { useRef } from "react";
import { search, seekOutLarge } from "../assets/index";
import { useResultContext } from "../Contexts/ResultContextProvider";
import { Link } from "react-router-dom";
import _ from 'lodash';

export default function Hero() {
  const { setSearchTerm } = useResultContext();

  const searchkeyWordRef = useRef();

  const handleSearch = () => {
    setSearchTerm(searchkeyWordRef.current.value);
  };

  // const handleKeyDown = (e) => {
  //   if (e.key === "Enter") {
  //     handleSearch();
  //     window.location.href = '/search';
  //   }
  // };



  return (
    <div className="overflow-hidden">
      <section className="bg-white bg-fixed">
        <p className="absolute text-slate-600 opacity-5 mt-[60px] ml-[-60px] font-Poppins text-[500px] font-bold">
          SeekOut
        </p>
        <div className="relative flex justify-center items-center flex-col h-screen w-full z-10">
          <div className="flex justify-center items-center gap-6">
            <img src={seekOutLarge} alt="SeekOut Logo" />
            <div>
              <div className="font-Poppins ">
                <p className="font-bold text-xl text-slate-800">Sriram</p>
                <p className="font-normal text-md text-slate-950">
                  Good morning
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-gray-100 border-slate-300 border-2 shadow-md w-[700px] px-12 py-6 rounded-full h-fit ">
              <span className="flex justify-center items-center gap-4">
                <img src={search} alt="Search Icon" />
                <input
                  type="text"
                  className="flex-1 font-Poppins bg-gray-100 text-slate-600 font-normal px-4 py-2 outline-none"
                  placeholder="Search by Keyword..."
                  ref={searchkeyWordRef}
                  // onKeyDown={handleKeyDown}
                />
                <Link to="/search">
                  <button
                    onClick={handleSearch}
                    className=" text-teal-500 hover:text-teal-900"
                  >
                    Search
                  </button>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
