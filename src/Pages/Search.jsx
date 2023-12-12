import { useState } from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Result from "../Components/Results";

const Search = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <div className={`${darkTheme ? "dark" : ""}`}>
      <header className="bg-white h-fit z-50">
        <NavBar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      </header>
      <div className="main-div h-fit bg-white dark:bg-dark-800">
        <Result/>
      </div>
      <footer className="fixed bottom-0 w-full">
        <Footer />
      </footer>
    </div>
  );
};

export default Search;
