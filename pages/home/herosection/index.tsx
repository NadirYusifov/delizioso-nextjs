import Image from "next/image";
import { Button } from "@/common/button";
import HeroImage from "@/public/homeassets/heroimage.png";

export default function HeroSection() {
  return (
    <section className="mt-12.5 lg:mt-25">
      <div className="container mx-auto px-4">
        <div className="hero-wrapper block lg:grid lg:grid-cols-2">
          <div className="hero-text">
            <p className="inline-block bg-dark-orange/20 text-dark-orange font-raleway px-8 py-2 mb-5 rounded-full">
              Restauran
            </p>
            <h3 className="w-full max-w-2xs text-dark-coffee text-[3.75rem] font-raleway lg:text-[5rem] leading-[100%] font-bold mb-7">
              Italian Cuisine
            </h3>
            <p className="w-full lg:w-130.75 text-deep-walnut text-[1.25rem] leading-10 font-popins font-normal mb-16">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales
              senectus dictum arcu sit tristique donec eget.
            </p>
            <div className="hero-btn space-x-5  lg:space-y-0 lg:space-x-5 pb-10">
              <Button
                title="Order Now"
                className="w-[8.694rem] h-[2.781rem] lg:h-[4.653rem] lg:w-[14.526rem] text-[0.848rem] lg:text-[1.25rem] font-popins leading-[200%]"
              />
              <Button
                variant="secondary"
                title="Reservation"
                className="w-[8.694rem] h-[2.781rem] lg:h-[4.653rem] lg:w-[14.526rem] text-[0.848rem] lg:text-[1.25rem] font-popins leading-[200%]"
              />
            </div>
          </div>
          <div className="hero-image">
            <Image
              src={HeroImage}
              width={700}
              height={500}
              quality={100}
              alt="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
