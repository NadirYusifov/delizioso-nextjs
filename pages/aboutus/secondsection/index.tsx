"use client";

import Image from "next/image";
import SecondImage from "@/public/aboutusassets/aboutussecondimage.png";
import SecondImageMobile from "@/public/aboutusassets/aboutussecondimagemobile.png";
import { useWindowWidth } from "@react-hook/window-size";

export default function SecondSection() {
  const windowWidth = useWindowWidth();

  return (
    <section className="aboutus-second-section">
      <div className="aboutus-second-wrapper lg:flex lg:items-center">
        {windowWidth < 1024 && (
          <picture className="aboutus-second-image flex flex-col items-center justify-center w-full">
            <Image
              src={SecondImageMobile}
              quality={100}
              width={600}
              height={600}
              alt="second-image"
            />
          </picture>
        )}
          <div className="aboutus-second-caption text-center lg:text-start pt-5 lg:pt-0">
        <div className="container mx-auto px-4 block lg:flex gap-x-96 lg:items-center">
            <p className="text-deep-walnut text-[17px] lg:text-[20px] leading-8 lg:leading-10 font-normal">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit.
            </p>
          </div>
        </div>
        {windowWidth >= 1024 && (
          <picture className="aboutus-second-image flex flex-row-reverse w-full">
            <Image
              src={SecondImage}
              quality={100}
              width={861.55}
              height={600}
              alt="second-image"
            />
          </picture>
        )}
      </div>
    </section>
  );
}
