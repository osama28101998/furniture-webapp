import React from "react";
import { navigation } from "../data";
const NavMobile = () => {
  return (
    <div className="backdrop-blur-xl transition bg-[rgba(255,255,255,0.5)] w-full h-full shadow-2xl">
      <ul className="text-center h-full flex flex-col items-center justify-center gap-y-6">
        {navigation.map((item, index) => {
          return (
            <li key={index}>
              <a className="text-xl font-medium capitalize" href={item.href}>
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavMobile;
