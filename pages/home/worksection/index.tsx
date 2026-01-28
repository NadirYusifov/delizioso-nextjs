"use client";

import Image from "next/image";
import { Button } from "@/common/button";
import { useWindowWidth } from "@react-hook/window-size";
import LineImage from "@/public/homeassets/line.png";
import WorkBgImage from "@/public/homeassets/workbgimage.png";
import WorkBgMobileImage from "@/public/homeassets/workbgimagemobile.png";

export default function WorkSection() {
  const windowWidth = useWindowWidth();

  return (
    <section className="my-28">
      <div className="container mx-auto px-4 relative">
        <div className="relative m-auto w-full lg:w-3/4 flex justify-center">
          {windowWidth >= 1024 && (
            <Image
              src={WorkBgImage}
              quality={100}
              width={1000}
              height={500}
              alt="work-image"
            />
          )}
          {windowWidth < 1024 && (
            <Image
              src={WorkBgMobileImage}
              quality={100}
              width={1000}
              height={500}
              alt="work-mobile-image"
            />
          )}
        </div>
        <div className="absolute top-0 bottom-0 right-0 left-0 flex flex-col justify-center items-center">
          <div className="text-white flex flex-col items-center">
            <h3 className="w-50 m-auto text-[40px] text-center font-bold md:text-[50px] lg:text-[60px] lg:w-full pb-8 font-tinos">
              we are open from
            </h3>
            <div className="text-center font-popins">
              <h4 className="text-[24px] md:text-[40px] font-semibold leading-normal pb-2.5">
                Monday-Sunday
              </h4>
              <p className="text-[1rem] md:text-[18px]">
                Launch : Mon-Sun : 11:00am-02:00pm
              </p>
              <article className="flex space-x-1">
                <p className="text-[1rem] md:text-[18px]">Dinner : sunday :</p>
                <ul className="text-[1rem] md:text-[18px] text-right">
                  <li>04:00pm-08:00pm</li>
                  <li>04:00pm-09:00pm</li>
                </ul>
              </article>
            </div>
          </div>
          <div className="flex flex-col space-y-4 py-5 md:flex-row md:space-y-0 md:space-x-3 md:py-5 lg:py-6.25">
            <Button
              title="Order Now"
              className="w-42 h-12.5 lg:h-[4.653rem] lg:w-[14.526rem] text-[0.875rem] lg:text-[1.125rem] font-semibold font-popins leading-[200%]"
            />
            <Button
              title="Reservation"
              variant="default"
              className="text-dark-coffee w-42 h-12.5 lg:h-[4.653rem] lg:w-[14.526rem] text-[0.875rem] lg:text-[1.125rem] font-semibold font-popins leading-[200%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
