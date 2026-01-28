"use client";

import Image from "next/image";
import MenuIcon from "@/public/headerassets/menuicon.svg";
import { useState } from "react";
import HeaderLink from "./HeaderLink";
import LoginButton from "./LoginButton";

export default function MobileHeader() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <nav>
        <button
          onClick={() => {
            setMenu(!menu);
          }}
          className="header-menu-btn lg:hidden bg-gray-50 rounded-full w-12.5 h-12.5 flex items-center justify-center"
        >
          {menu && (
            <div className="bg-dark-orange w-1/2 h-screen fixed right-0 top-0 -z-50">
              <div className="mt-24">
                <HeaderLink />
                <div className="flex justify-center mt-8">
                  <LoginButton />
                </div>
              </div>
            </div>
          )}
          <Image
            className={
              menu ? "rotate-90 transition-all" : "rotate-0 transition-all"
            }
            src={MenuIcon}
            width={24}
            height={24}
            alt="Menu"
          />
        </button>
      </nav>
    </>
  );
}
