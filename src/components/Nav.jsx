import { Link } from "react-router-dom";
import Searchicon from "../assets/search.svg";

export default function NavBar() {
  function searchIcon() {
    let searchicon = document.getElementById("searchicon");
    let searchbar = document.getElementById("searchbar");
    searchicon.classList.add("hidden");
    searchbar.classList.remove("hidden");
  }
  function searchBar() {
    let searchicon = document.getElementById("searchicon");
    let searchbar = document.getElementById("searchbar");
    searchbar.addEventListener("keydown", (e) => {
      if (e.code === "Enter") {
        searchbar.classList.add("hidden");
        searchicon.classList.remove("hidden");
      }
    });
  }
  return (
    <nav className="fixed w-screen px-4  z-40 bg-white">
      <div className="w-100% border-b-2 h-16 flex justify-between px-3 items-center">
        <Link to="/">
          <p className="text-3xl font-extrabold ">TCV</p>
        </Link>
        <input
          type="search"
          className="rounded-md outline-none p-1 hidden bg-slate-300/80"
          id="searchbar"
          onFocus={searchBar}
        />
        <img
          src={Searchicon}
          alt="search"
          id="searchicon"
          onClick={searchIcon}
          height="40"
          width="40"
        />
      </div>
    </nav>
  );
}
