import React, { useEffect, useState } from "react";
import logo from "../assets/img/logo.svg";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { navigation } from "../data";

import NavMobile from "./NavMobile";
const Header = () => {
  const [bg, setbg] = useState(true);
  const [mobileNav, setmobileNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setbg(true) : setbg(false);
    });
  });

  return (
    <header
      className={`${bg ? "bg-primary py-4 lg:py-6" : "bg-none"}
    fixed left-0 w-full py-8 z-10 transition-all duration-200`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#">
            <img className="h-6 lg:h-8" src={logo} alt="logo" />
          </a>

          <div
            onClick={() => setmobileNav(!mobileNav)}
            className="text-2xl text-white md:hidden lg:text-3xl cursor-pointer"
          >
            {mobileNav ? <CgClose /> : <CgMenuRight />}
          </div>
          <nav className="hidden md:flex">
            <ul className="md:flex md:gap-x-12">
              {navigation.map((item, index) => {
                return (
                  <li key={index}>
                    <a
                      className="capitalize text-white hover:border-b transition-all"
                      href={item.href}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div
            className={`${
              mobileNav ? "left-0" : "-left-full"
            } md:hidden fixed bottom-0 w-full max-w-xs h-screen transition-all`}
          >
            <NavMobile />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
