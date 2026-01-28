import Image from "next/image";
import { Button } from "@/common/button";
import WelcomeSectionImage from "@/public/homeassets/welcomesection.png";

export default function WelcomeSection() {
    return (
        <section className="bg-medium-jungle/10 py-28">
            <div className="welcome-wrapper grid grid-cols-1 lg:grid-cols-2 place-items-center">
                <div className="welcome-image order-1">
                    <Image src={WelcomeSectionImage} width={700} height={500} alt="welcome-section" />
                </div>
                <div className="container mx-auto px-4 order-1">
                    <div className="welcome-text">
                        <h3 className="text-[3.75rem] text-dark-coffee lg:text-[5rem] leading-[110.1%] font-bold font-tinos">Welcome to <span className="text-dark-orange">delizioso</span></h3>
                        <p className="w-full lg:w-[433.11px] text-deep-walnut text-[20px] font-normal font-popins leading-[200%] pt-15 pb-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam </p>
                        <Button title="See our menu" className="w-42 h-[3.438rem] lg:w-[14.526rem] lg:h-[4.653rem] text-[0.875rem] lg:text-[1.25rem]"/>
                    </div>
                </div>
            </div>
        </section>
    )
}
