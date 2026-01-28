import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logoassets/logodeliziosoblack.png";
import Cart from "@/public/headerassets/cart.svg";
import MobileHeader from "./MobileHeader";
import HeaderLink from "./HeaderLink";
import LoginButton from "./LoginButton";

export default function Header() {
  return (
    <>
      <header className="header-section sticky top-0 z-30 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="header-logo">
              <Link href="/">
                <Image src={Logo} width={100} height={50} alt="Logo" />
              </Link>
            </div>
            <div className="hidden lg:block">
              <HeaderLink />
            </div>
            <nav className="header-right flex items-center space-x-5">
              <button className="bg-gray-50 rounded-full w-12.5 h-12.5 flex items-center justify-center relative">
                <span className="absolute right-1 top-1 text-white text-[10px] bg-red-600 w-5 h-5 rounded-full flex items-center justify-center">
                  0
                </span>
                <Image src={Cart} width={24} height={24} alt="Cart" />
              </button>
              <div className="hidden lg:block">
                <LoginButton />
              </div>
              <MobileHeader />
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
