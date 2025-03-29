import React, { useState } from "react";
import { RiMenu2Line, RiCloseLine } from "@remixicon/react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showmenu, setShowmenu] = useState(true);

  return (
    <nav className="flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20">
      <span className="text-xl font-bold tracking-wide">Portfolio</span>

      <ul
        className={`${menu ? "block" : "hidden"} mx-24 py-2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none 
        text-center md:bg-transparent md:static md:mx-0 md:flex gap-8`}
      >
        <li><a href="#About">About</a></li>
        <li><a href="#Experience">Experience</a></li>
        <li><a href="#Projects">Projects</a></li>
        <li><a href="#Footer">Contact</a></li>
      </ul>

      {showmenu ? (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => {
            setMenu(true);
            setShowmenu(false);
          }}
        />
      ) : (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => {
            setMenu(false);
            setShowmenu(true);
          }}
        />
      )}
    </nav>
  );
};

export default Navbar;
