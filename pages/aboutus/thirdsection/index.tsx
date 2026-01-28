'use client'

import Image from 'next/image'
import ThirdImage from '@/public/aboutusassets/aboutusthirdimage.png'
import Aquotationmark from '@/public/aboutusassets/aquotationmark.png'
import Aquotationmark2 from '@/public/aboutusassets/aquotationmark2.png'
import { useWindowWidth } from '@react-hook/window-size'

export default function ThirdSection() {
  const windowWidth = useWindowWidth();

  return (
    <>
      <section className="aboutus-first-section mt-[130px] mb-14">
        <div className="container">
          {windowWidth < 1024 && (
            <div className="text-center lg:text-start pb-10">
              <h2 className="text-medium-roast text-[40px] lg:text-[80px] leading-[44px] lg:leading-[88px] font-bold font-tinos"><span className="text-dark-orange">Owner</span> & <br /> Executive Chef</h2>
            </div>
          )}
          <div className="aboutus-wrapper block lg:flex lg:justify-between lg:items-center">
            <picture className="aboutus-third-image w-full flex justify-center lg:block">
              <Image className="rounded-3xl lg:rounded-none w-3/4 lg:w-[60%]" quality={100} src={ThirdImage} alt="third-image" />
            </picture>
            <div className="aboutus-right-caption">
              <div className="aboutus-right-header">
                {windowWidth >= 1024 && (
                  <h2 className="text-dark-orange text-[40px] lg:text-[80px] text-center lg:text-start leading-[44px] lg:leading-[88px] font-bold font-tinos">Owner<span className="text-dark-coffee"> & Executive Chef</span></h2>
                )}
                <h3 className="text-[30px] lg:text-[40px] text-center lg:text-start leading-[60px] font-semibold pt-5">Ismail Markuzi</h3>
              </div>
              <div className="aboutus-third-caption mt-[47px]">
                <Image className="pb-3" src={Aquotationmark} quality={100} width={30} height={30} alt="quotationmark" />
                <div className="aboutus-third-caption-text text-center lg:text-start">
                  <i className="text-deep-walnut text-[25px] lg:text-[30px] leading-[60px] font-light font-popins">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</i>
                </div>
                <div className="flex flex-row-reverse pt-3">
                  <Image quality={100} width={30} height={30} alt="quotationmark" src={Aquotationmark2} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
