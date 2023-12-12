import { seekOutFull, userProfileIcon, dark, light } from "../assets/index";
import { Link } from "react-router-dom";
import Search from "./Search";
import Links from "./Links";

const NavBar = (props) => {
  return (
    <div className="border-b-[1px] z-50 fixed top-0 left-0  w-full h-fit  border-gray-200 flex flex-col bg-white">
      <div className="nav-content flex justify-between items-center  dark:bg-dark-800 px-4 py-4   ">
        <div
          id="logo-search"
          className="flex justify-center items-center w-fit h-fit gap-8"
        >
          <span>
            <Link to="/">
              <img src={seekOutFull} alt="logo" height={30} width={90} />
            </Link>
          </span>
          <Search />
        </div>
        <div
          id="user-profile"
          className="flex items-center justify-center gap-8 px-2 py-1 border-gray-300 bg-white dark:border-teal-600 border-[1px] dark:bg-gray-700 h-fit w-fit rounded-full "
        >
          <button onClick={() => props.setDarkTheme(!props.darkTheme)}>
            <img src={props.darkTheme ? light : dark} alt="mode" />
          </button>
          {/* 
            <span>
              <Link href="/">
                <img src={userProfileIcon} height={36} width={36} alt="logo" />
              </Link>
            </span> */}
        </div>
      </div>
      <div className="nav-links mt-[5px] p-4  dark:bg-dark-800">
        <Links />
      </div>
    </div>
  );
};

export default NavBar;
