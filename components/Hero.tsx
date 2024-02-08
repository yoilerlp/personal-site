import React from 'react'
import Image from 'next/image'
import { SocialMediaLinksComponent } from './Footer'
import { aboutMeShort } from '@/helpers/me'

const Hero = () => {
  return (
    <section className=' wrapper flex flex-col-reverse gap-8 items-center md:gap-[6.5rem] pt-8 pb-14 md:flex-row md:flex- md:pb-[4.375rem] md:pt-14'>
      <div className=' max-sm:items-center  flex flex-col gap-10'>
        <h1 className='dark:text-primary max-sm:text-center text-justify font-bold text-dark text-title'>
          {/* Hi, I am Yoyler, a Software Developer */}
          Hola! Soy Yoyler, Desarrollador de Software
        </h1>

        <p className='dark:text-blueLight  max-sm:text-center text-justify text-[1.5rem] text-dark'>
          {aboutMeShort.es}
        </p>

        <div className='flex gap-7  '>
          <SocialMediaLinksComponent className='gap-4' />
          <a
            role={'link'}
            href='https://github.com/yoilerlp/yoilerlp/raw/main/Resume-Yoyler-mosquera-cordoba_cv.pdf'
            className='flex justify-center items-center w-52 h-12 bg-primary text-white font-medium leading-8 text-xl'
          >
            {/* Download Resume */}
            Descargar CV
          </a>
        </div>
      </div>
      <div>
        <figure className='w-[243px] h-[243px] rounded-full overflow-hidden'>
          <Image
            loading='lazy'
            src='/me.webp'
            alt='Yoyler Mosquera Córdoba - developer'
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
