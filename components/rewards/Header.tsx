import React from "react";
import Headroom from "react-headroom";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <Headroom>
      <header className="sticky top-0 z-10 grid grid-cols-1 items-center bg-secondary p-4 text-white shadow-md sm:grid-cols-2 md:px-20">
        <div className="flex w-full justify-between sm:w-auto">
          <h1 className="text-2xl font-bold text-primary">Clamio</h1>
          <div className="sm:hidden">
            <GiHamburgerMenu size={24} />
          </div>
        </div>
        <nav className="hidden justify-self-center sm:block sm:justify-self-end md:block">
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="font-bold hover:text-primary">
                COMMUNITY
              </a>
            </li>
            <li>
              <a href="#" className="font-bold hover:text-primary">
                EXPLORE
              </a>
            </li>
            <li>
              <a href="#" className="font-bold hover:text-primary">
                CREATORS
              </a>
            </li>
            <li>
              <a href="#" className="font-bold hover:text-primary">
                JOIN
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </Headroom>
  );
};

export default Header;
