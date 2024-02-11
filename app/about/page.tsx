import React from 'react'
import { Metadata } from 'next'
import Image from 'next/image'

import { Container } from '@/components'
import { aboutMe } from '@/helpers/me'

export const metadata: Metadata = {
  title: `About Me`,
  description: `
    ${aboutMe.es.paragraphOne}
    ${aboutMe.es.paragraphOneTwo}
    ${aboutMe.es.paragraphOneThree}
  `,
}

function AboutMePage() {
  const lang: keyof typeof aboutMe = 'es'
  return (
    <main className={`grow`}>
      <Container>
        <h1 className='dark:text-primary text-title text-[2rem] mb-2'>Sobre mi</h1>
        <section className='flex gap-6 pt-8  flex-col-reverse md:flex-row'>
          <article className='dark:text-white text-dark w-full text-justify '>
            <p className='mb-6 '>{aboutMe[lang].paragraphOne}</p>

            <p className='mb-6 '>{aboutMe[lang].paragraphOneTwo}</p>

            <p className='mb-6 '>{aboutMe[lang].paragraphOneThree}</p>
          </article>
          <div className='hidden lg:flex w-full justify-center'>
            <figure className='p-3  w-full h-full'>
              <Image
                className='max-h-[500px] rounded-md w-full object-cover'
                src='/me.webp'
                alt='Yoyler Córdoba'
                width={400}
                height={500}
              />
            </figure>
          </div>
        </section>
      </Container>
    </main>
  )
}

export default AboutMePage
