'use client'
import Image from 'next/image'
import React from 'react'
import Icon from './Icon'
import Link from 'next/link'

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
  className?: string
}

function ProjectCard({ project, className = '' }: ProjectCardProps) {
  return (
    <article
      className={`grid grid-cols-1 md:grid-cols-[250px_1fr] gap-5 w-full border-b pb-4 ${className}`}
    >
      <section className='rounded-md '>
        <Image
          loading='lazy'
          src='/me.jpg'
          alt={`project - ${project.title}`}
          width={246}
          height={180}
          className='object-cover w-full h-[180px] max-h-[180px]'
        />
        <div className='w-full mt-4 gap-4  flex '>
          <Link
            className='p-2 border-b-2  border-primary flex gap-1 items-center justify-center '
            href={'#'}
          >
            <Icon iconName='CodeIcon' size={24} />
            <span>Code</span>
          </Link>

          <Link
            className='p-2 border-b-2 border-primary flex gap-1 items-center justify-center '
            href={'#'}
          >
            <Icon iconName='LinkIcon' size={24} />
            <span>Demo</span>
          </Link>
        </div>
      </section>
      <section className='grow flex flex-col gap-4'>
        <h3 className='text-[30px] font-bold leading-[44px] text-dark'>
          {project?.title}
        </h3>
        <div className='flex gap-9 items-center'>
          <div className='w-16 h-6 rounded-2xl flex justify-center items-center bg-[#142850] text-white font-black'>
            <span>{project?.year}</span>
          </div>
          <span className='text-lg leading-7 text-light'>
            {project.category}
          </span>
        </div>
        <div>
          <ol className='flex gap-2'>
            {project.tags?.map((tag) => (
              <li
                className=' flex-shrink-0 p-2 border font-medium text-[12px]  rounded-md border-primary'
                key={tag}
              >
                {tag}
              </li>
            ))}
          </ol>
        </div>
        <p className='text-base leading-6'>{project?.description}</p>
      </section>
    </article>
  )
}

export default ProjectCard
