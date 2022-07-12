import React, { useEffect, useState } from "react";
import smileyLogo from "../assets/img/smiley.png";
import { HiSearch, HiBell } from "react-icons/hi";
import useAuth from "../hooks/useAuth";

const Header = () => {
  const { logout } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${isScrolled && "bg-[#141414]"}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="https://rb.gy/ulxxee"
          alt="netflix"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />

        <ul className="hidden space-x-4 md:flex">
          <li className="navButton">Home</li>
          <li className="navButton">TV Shows</li>
          <li className="navButton">Movies</li>
          <li className="navButton">New & Popular</li>
          <li className="navButton">My List</li>
        </ul>
      </div>

      <div className="flex space-x-4 items-center mr-1 text-sm font-light">
        <HiSearch className="hidden w-6 h-6 sm:inline" />
        <p className="hidden lg:inline">Kids</p>
        <HiBell className="w-6 h-6" />
        <img
          src={smileyLogo}
          alt="smiley"
          className="w-6 h-6 rounded cursor-pointer"
          onClick={logout}
        />
      </div>
    </header>
  );
};

export default Header;
