"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderLink() {
  const path = usePathname();

  return (
    <>
      <nav className="header-menu text-medium-roast text-[25px] lg:text-[14px] xl:text-[16px] font-normal leading-5.25 flex flex-col lg:flex-row space-y-7 lg:space-y-0 lg:space-x-8 xl:space-x-12">
        <Link
          className={`hover:translate-x-2 transition-all lg:hover:translate-x-0 ${path === "/" ? "text-dark-coffee lg:text-dark-orange" : "text-white lg:text-black"}`}
          href={"/"}
        >
          Home
        </Link>
        <Link
          className={`hover:translate-x-2 transition-all lg:hover:translate-x-0 ${path === "/menu" ? "text-dark-coffee lg:text-dark-orange" : "text-white lg:text-black"}`}
          href={"/menu"}
        >
          Menu
        </Link>
        <Link
          className={`hover:translate-x-2 transition-all lg:hover:translate-x-0 ${path === "/aboutus" ? "text-dark-coffee lg:text-dark-orange" : "text-white lg:text-black"}`}
          href={"/aboutus"}
        >
          About us
        </Link>
        <Link
          className={`hover:translate-x-2 transition-all lg:hover:translate-x-0 ${path === "/orderonline" ? "text-dark-coffee lg:text-dark-orange" : "text-white lg:text-black"}`}
          href={"/order"}
        >
          Order online
        </Link>
        <Link
          className={`hover:translate-x-2 transition-all lg:hover:translate-x-0 ${path === "/reservation" ? "text-dark-coffee lg:text-dark-orange" : "text-white lg:text-black"}`}
          href={"/reservation"}
        >
          Reservation
        </Link>
        <Link
          className={`hover:translate-x-2 transition-all lg:hover:translate-x-0 ${path === "/contactus" ? "text-dark-coffee lg:text-dark-orange" : "text-white lg:text-black"}`}
          href={"/contactus"}
        >
          Contact us
        </Link>
      </nav>
    </>
  );
}
