"use client";

import Image from "next/image";
import FirstImage from "@/public/aboutusassets/aboutusfirstimage.png";
import FirstImageMobile from "@/public/aboutusassets/aboutusfirstimagemobile.png";
import { useWindowWidth } from "@react-hook/window-size";

export default function FirstSection() {
  const windowWidth = useWindowWidth();

  return (
    <section className="aboutus-first-section mb-12">
      {windowWidth < 1024 && (
        <div className="aboutus-right-header text-center mb-4 lg:mb-20">
          <h2 className="text-dark-orange text-[40px] lg:text-[80px] leading-[100%] lg:leading-22 font-tinos font-bold">
            Our<span className="text-dark-coffee"> restautant</span>
          </h2>
        </div>
      )}
      <div className="aboutus-first-wrapper  lg:flex lg:justify-center text-center lg:items-center">
        {windowWidth >= 1024 && (
          <picture className="aboutus-first-image w-full">
            <Image
              src={FirstImage}
              quality={100}
              width={861.55}
              height={600}
              alt="first"
            />
          </picture>
        )}
        {windowWidth < 1024 && (
          <picture className="aboutus-first-image w-full flex flex-col items-center justify-center">
            <Image
              src={FirstImageMobile}
              quality={100}
              width={600}
              height={600}
              alt="first"
            />
          </picture>
        )}
        <div className="container mx-auto px-4">
          {windowWidth >= 1024 && (
            <article className="aboutus-right-header lg:text-start mb-20">
              <h2 className="text-[80px] leading-22 text-dark-coffee font-bold font-tinos">
                <span className="text-dark-orange">Our</span>
                <br /> restautant
              </h2>
            </article>
          )}
            <div className="aboutus-first-caption pt-5 lg:pt-0">
              <article>
                <p className="text-deep-walnut text-center lg:text-start text-[1.063rem] lg:text-[1.25rem] leading-8 lg:leading-10 font-popins font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse.
                </p>
              </article>
            </div>
          </div>
      </div>
    </section>
  );
}
