"use client";

import Image from "next/image";
import { Button } from "@/common/button";
import { useWindowWidth } from "@react-hook/window-size";
import ReserveFirstImage from "@/public/homeassets/reserveimg1.png";
import ReserveSecondImage from "@/public/homeassets/reserveimg2.png";
import ReserveThirdImage from "@/public/homeassets/reserveimg3.png";
import ReserveMobileImage from "@/public/homeassets/reservemobileimg.png";

export default function ReserveSection() {
  const windowWidth = useWindowWidth();

  return (
    <section className="bg-porcelain py-27.5">
      <div className="reserve-wrapper grid grid-cols-1 lg:grid-cols-2 gap-x-10 place-content-center place-items-center">
        {windowWidth < 1024 && (
          <div className="relative order-2">
            <Image
              quality={100}
              width={700}
              src={ReserveMobileImage}
              alt="reserve-section"
            />
          </div>
        )}
        {windowWidth >= 1024 && (
          <div className="reserve-image relative">
            <div className="relative">
              <Image
                width={1000}
                src={ReserveFirstImage}
                alt="reserve-section"
              />
            </div>
            <div className="absolute -top-6 right-6 md:right-[25%] lg:right-[20%] xl:right-[20%]">
              <Image
                className="w-32 md:w-full lg:w-30 xl:w-35"
                quality={100}
                src={ReserveSecondImage}
                alt="reserve-section"
              />
            </div>
            <div className="absolute bottom-0 left-0">
              <Image
                className="w- xl:w-37.5"
                quality={100}
                src={ReserveThirdImage}
                alt="reserve-section"
              />
            </div>
          </div>
        )}
        <div className="container mx-auto px-4">
          <div className="reserve-text">
            <h3 className="text-[80px] text-dark-coffee leading-27.5 font-bold font-tinos">
              Let&apos;s reserve
              <span className="text-dark-orange">
                <br /> a table
              </span>
            </h3>
            <p className="w-full lg:w-[27.069rem] text-deep-walnut text-[1.25rem] font-normal font-popins leading-[200%] pt-15 pb-20">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              ultricies at eleifend proin. Congue nibh nulla malesuada ultricies
              nec quam{" "}
            </p>
            <Button
              title="Reservation"
              className="w-42 h-[3.438rem] lg:w-[14.526rem] lg:h-[4.653rem] mb-[0.856rem] font-semibold text-[0.875rem] lg:text-[1.25rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
