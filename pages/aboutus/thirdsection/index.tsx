"use client";

import Image from "next/image";
import ThirdImage from "@/public/aboutusassets/aboutusthirdimage.png";
import { useWindowWidth } from "@react-hook/window-size";

export default function ThirdSection() {
  const windowWidth = useWindowWidth();

  return (
    <>
      <section className="aboutus-first-section mt-32.5 mb-14">
        <div className="container mx-auto px-4">
          {windowWidth < 1024 && (
            <div className="text-center lg:text-start pb-10">
              <h2 className="text-dark-coffee text-[40px] lg:text-[80px] leading-[100%] lg:leading-22 font-bold font-tinos">
                <span className="text-dark-orange">Owner</span> & <br />
                Executive Chef
              </h2>
            </div>
          )}
          <div className="aboutus-wrapper block lg:flex lg:justify-between lg:items-center">
            <picture className="aboutus-third-image w-full flex justify-center lg:block">
              <Image
                width={230}
                height={1000}
                quality={100}
                src={ThirdImage}
                alt="third-image"
                loading="lazy"
                className="rounded-3xl lg:rounded-none object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 45vw, 430px"
              />
            </picture>
            <div className="aboutus-right-caption">
              <div className="aboutus-right-header">
                {windowWidth >= 1024 && (
                  <h2 className="text-dark-orange text-[40px] lg:text-[80px] text-center lg:text-start leading-11 lg:leading-22 font-bold font-tinos">
                    Owner
                    <span className="text-dark-coffee"> & <br /> {" "} Executive Chef</span>
                  </h2>
                )}
                <h3 className="text-[30px] lg:text-[40px] text-center lg:text-start leading-[200%] font-semibold pt-10">
                  Ismail Markuzi
                </h3>
              </div>
              <div className="aboutus-third-caption pt-10">
                <div className="aboutus-third-caption-text text-center lg:text-start">
                  <p className="text-start text-dark-orange/20 font-bold leading-[100%] text-[5rem] font-tinos">
                    “
                  </p>
                  <i className="text-deep-walnut text-[25px] lg:text-[30px] font-light leading-[200%] font-popins">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </i>
                  <p className="text-start text-dark-orange/20 font-bold leading-[100%] text-[5rem] rotate-180 font-tinos">
                    “
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
