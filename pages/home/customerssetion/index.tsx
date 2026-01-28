import Image from 'next/image';
import Users from "@/public/homeassets/user.png";
import Ellipse from "@/public/homeassets/ellipse1.png";

export default function CustomersSection() {
  return (
    <section className='w-full bg-[url(@/public/homeassets/round.png)] bg-dust-grey/10 py-20 my-30'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col justify-center items-center'>
          <div>
            <article className='text-center'>
              <h1 className='text-dark-coffee text-[2.188rem] lg:text-[2.5rem] font-bold leading-[200%] font-tinos'>Our customers say</h1>
            </article>
            <picture className='flex justify-center items-center mt-20 lg:mt-[3.586rem]'>
              <Image className='w-30 lg:max-w-56' src={Ellipse} width={261.59} height={200} quality={100} alt='Customer Photo' />
            </picture>
            <article className='text-center mt-[2.621rem]'>
              <h3 className='text-dark-coffee text-[1.875rem] font-popins font-semibold leading-[200%]'>Starla Virgoun</h3>
              <p className='text-deep-walnut text-[1.125rem] font-popins font-normal leading-[200%]'>Financial advisor</p>
            </article>
          </div>
            <article className='flex flex-col'>
              <span className='text-dark-coffee text-[5rem] font-bold leading-[200%] font-tinos rotate-0'>“</span>
              <p className='w-full lg:w-[32.757rem] text-deep-walnut text-[1.125rem] font-normal font-popins text-center leading-[200%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam </p>
              <span className='text-dark-coffee text-[5rem] font-bold leading-[200%] font-tinos rotate-180'>“</span>
            </article>
            <picture>
              <Image src={Users} width={973.49} height={200} quality={100} alt='Customers' />
            </picture>
        </div>
      </div>
    </section>
  )
}
