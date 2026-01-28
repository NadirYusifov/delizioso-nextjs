'use client'

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/common/button";
import ChefFirst from "@/public/homeassets/cheffirst.png";
import ChefSecond from "@/public/homeassets/chefsecond.png";
import ChefThird from "@/public/homeassets/chefthird.png";
import ChefFourth from "@/public/homeassets/cheffourth.png";
import { useWindowWidth } from "@react-hook/window-size";


export default function ChefSection() {
  const windowWidth = useWindowWidth()
  const [open, setOpen] = useState(false)

  return (
    <section className="mt-[10.971rem]">
      <div className="container mx-auto px-4">
        <div className="chef-wrapper">
          <div className="chef-header text-center">
            <h3 className="text-dark-coffee text-[2.188rem] lg:text-[5rem] font-bold leading-[135%] lg:leading-[200%] pb-20">
              Our greatest chef
            </h3>
          </div>
          <div className="chef-image grid gap-x-3 gap-y-10 grid-cols-2 lg:gap-0 place-content-center place-items-center lg:grid-cols-3">
            <div className="chef-first text-center">
              <Image
                src={ChefSecond}
                width={350}
                height={200}
                alt="chef-second"
              />
              <h3 className="text-dark-coffee text-[1.125rem] lg:text-[1.563rem] font-semibold leading-[100%] pt-8">
                Betran Komar
              </h3>
              <p className="text-dusty-taupe text-[1.125rem] lg:text-[1.563rem] pt-7">
                Head Chef
              </p>
            </div>
            <div className="chef-second text-center">
              <Image
                src={ChefFirst}
                width={350}
                height={200}
                alt="chef-first"
              />
              <h3 className="text-dark-coffee text-[1.125rem] lg:text-[1.563rem] font-semibold leading-[100%] pt-8">
                Ferry Sauwi
              </h3>
              <p className="text-dusty-taupe text-[1.125rem] lg:text-[1.563rem] pt-7">
                Chef
              </p>
            </div>
            <div className="chef-third text-center">
              <Image
                src={ChefThird}
                width={350}
                height={200}
                alt="chef-third"
              />
              <h3 className="text-dark-coffee text-[1.125rem] lg:text-[1.563rem] font-semibold leading-[100%] pt-8">
                Iswan Dracho
              </h3>
              <p className="text-dusty-taupe text-[1.125rem] lg:text-[1.563rem] pt-7">
                Chef
              </p>
            </div>

            {windowWidth < 1024 && (
              <div className="chef-fourth text-center lg:mt-[1.896rem]">
                <Image
                  src={ChefFourth}
                  width={350}
                  height={200}
                  quality={100}
                  alt="chef-fourth"
                />
                <h3 className="text-dark-coffee text-[1.125rem] lg:text-[1.563rem] font-semibold leading-[100%] pt-8">
                  Ferry Sauwi
                </h3>
                <p className="text-dusty-taupe text-[1.125rem] lg:text-[1.563rem] pt-7">
                  Chef
                </p>
              </div>
            )}
            {windowWidth >= 1024 &&
              open &&
              <div className="chef-fourth text-center lg:mt-[1.896rem]">
                <Image
                  src={ChefFourth}
                  width={350}
                  height={200}
                  quality={100}
                  alt="chef-fourth"
                />
                <h3 className="text-dark-coffee text-[1.125rem] lg:text-[1.563rem] font-semibold leading-[100%] pt-8">
                  Ferry Sauwi
                </h3>
                <p className="text-dusty-taupe text-[1.125rem] lg:text-[1.563rem] pt-7">
                  Chef
                </p>
              </div>
            }
          </div>
          <div className="hidden lg:flex items-center justify-center mt-37.5">
            <Button onClick={() => setOpen(!open)} title="View all" className="w-[14.688rem] h-18.5 font-semibold text-[1.25rem] leading-[200%]" />
          </div>
        </div>
      </div>
    </section>
  );
}
