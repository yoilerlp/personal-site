'use client'
import Image from 'next/image'
import React from 'react'

type Project = {
    title: string
    description: string
    category: string
    slug?: string
    year: string | number
    tags?: string[]
    img?: string
}

interface ProjectCardProps {
    project: Project
}

function ProjectCard({ project  }: ProjectCardProps) {
  return (
    <article className='grid grid-cols-1  md:grid-cols-[250px_1fr] gap-5 w-full border-b pb-4'>
      <div className='h-[11.25rem] border border-primary overflow-hidden rounded-md'>
        <Image
          loading='lazy'
          src='/me.jpg'
          alt={`project - ${project.title}`}
          width={246}
          height={180}
          className='object-cover w-full h-full'
        />
      </div>
      <section className='grow flex flex-col gap-4'>
        <h3 className='text-[30px] font-bold leading-[44px] text-dark'>{project?.title}</h3>
        <div className='flex gap-9 items-center'>
          <div className='w-16 h-6 rounded-2xl flex justify-center items-center bg-[#142850] text-white font-black'>
            <span>{project?.year}</span>
          </div>
          <span className='text-lg leading-7 text-light'>{project.category}</span>
        </div>
        <p className='text-base leading-6'>
          {project?.description}
        </p>
      </section>
    </article>
  )
}

export default ProjectCard
