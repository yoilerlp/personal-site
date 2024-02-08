'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Icon from './Icon'
import { ProjectCardTags } from './Tags'
import { Project } from '@/interfaces/project'
import useCurrentTheme from '@/hooks/useCurrentTheme'

interface ProjectCardProps {
  project: Project
  className?: string
}

function ProjectCard({ project, className = '' }: ProjectCardProps) {
  const { theme } = useCurrentTheme()
  const isDark = theme === 'dark'
  return (
    <article
      className={`grid grid-cols-1 md:grid-cols-[250px_1fr] gap-5 w-full border-b pb-4 ${className}`}
    >
      <section className='rounded-md dark:overflow-hidden'>
        <Image
          loading='lazy'
          src={project.img!}
          alt={`project - ${project.title}`}
          width={246}
          height={180}
          className='dark:bg-white object-cover overflow-hidden object-center w-full h-[180px] max-h-[180px]'
        />
        <div className='w-full mt-4 gap-4  flex '>
          {project.codeURL && (
            <Link
              className='dark:text-white p-2 border-b-2  border-primary flex gap-1 items-center justify-center '
              href={project.codeURL}
              target='_blank'
            >
              <Icon 
                color={isDark ? 'white' : undefined}

              iconName='CodeIcon' size={24} />
              <span>Code</span>
            </Link>
          )}

          {project.demoURL && (
            <Link
              className='dark:text-white  p-2 border-b-2 border-primary flex gap-1 items-center justify-center '
              href={project.demoURL}
              target='_blank'
            >
              <Icon
                color={isDark ? 'white' : undefined}
                iconName='LinkIcon'
                size={24}
              />
              <span>Demo</span>
            </Link>
          )}
        </div>
      </section>
      <section className='grow flex flex-col gap-4'>
        <h3 className='dark:text-white text-[30px] font-bold leading-[44px] text-dark'>
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
          <ProjectCardTags tags={project.tags || []} />
        </div>
        <p className='dark:text-white/90 text-base leading-6 text-justify'>
          {project?.description}
        </p>
      </section>
    </article>
  )
}

export default ProjectCard
