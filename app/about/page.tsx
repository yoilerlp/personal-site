import React from 'react'
import { Container } from '@/components'
import Image from 'next/image'

import styles from '@/styles/about.module.css'

function AboutMePage() {
  return (
    <main className={`${styles.about_page}`}>
      <Container>
        <section className='flex gap-6 pt-8  md:pt-14'>
          <div className='hidden lg:flex w-full justify-center'>
            <figure className='p-3  w-full h-full'>
              <Image
                className=' max-h-[500px]  w-full object-cover'
                src='/me.jpg'
                alt='me'
                width={400}
                height={500}
              />
            </figure>
          </div>
          <article className='w-full text-justify '>
            <h1 className='text-title text-[2rem] mb-4'>About Me</h1>
            <p className='mb-6 '>
              Soy Yoyler Mosquera Córdoba, un desarrollador de software
              apasionado por el mundo web y mobile. Me considero una persona
              entusiasta de la tecnología, comprometida con mi crecimiento
              personal y profesional. Nací en Quibdó, Colombia, y actualmente
              estoy en la recta final de mi carrera de ingeniería de sistemas.
            </p>

            <p className='mb-6 '>
              Con casi 3 años de experiencia en el desarrollo de software, he
              adquirido un profundo conocimiento y experiencia en el desarrollo
              web. Disfruto trabajando en equipo, colaborando con otros
              profesionales para lograr resultados sobresalientes. Me siento muy
              realizado cuando mis contribuciones tienen un impacto positivo en
              las personas y les facilitan su día a día. Siempre busco aprender
              nuevas tecnologías y herramientas que pueda aplicar en mi trabajo
              diario, con el objetivo de mejorar constantemente como
              desarrollador.
            </p>

            <p className='mb-6 '>
              En mis tiempos libres, disfruto viajar y descubrir nuevos lugares,
              valoro el tiempo que paso con mis amigos, ya sea compartiendo
              experiencias, conversaciones o simplemente divirtiéndonos juntos.
              Cuidar de mi bienestar físico también es importante para mí, por
              lo que trato de dedicar tiempo a hacer ejercicio regularmente.
              Además, soy un apasionado del anime y la lectura de mangas, lo que
              me permite sumergirme en historias fascinantes y estimular mi
              imaginación.
            </p>
            
          </article>
        </section>
      </Container>
    </main>
  )
}

export default AboutMePage
