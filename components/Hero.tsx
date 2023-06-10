import Image from 'next/image'
import React from 'react'
const Hero = () => {
  return (
    <section className=' border wrapper flex flex-col-reverse gap-8 items-center md:gap-[6.5rem] pt-8 pb-14 md:flex-row md:flex- md:pb-[4.375rem] md:pt-32'>
      <div className=' border max-sm:items-center  flex flex-col gap-10'>
        <h1 className=' max-sm:text-center font-bold text-dark text-title'>
          Hi, I am John, Creative Technologist
        </h1>

        <p className=' max-sm:text-center text-base text-dark'>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>

        <button
          role={'link'}
          className='w-52 h-12 bg-primary text-white font-medium leading-8 text-xl'
        >
          Download Resume
        </button>
      </div>
      <div>
        <figure className='w-[243px] h-[243px] rounded-full overflow-hidden'>
          <Image
            loading='lazy'
            src='/me.jpg'
            alt='Yoyler Mosquera Cordoba'
            width={343}
            height={343}
            className='object-cover'
          />
        </figure>
      </div>
    </section>
  )
}

export default Hero
