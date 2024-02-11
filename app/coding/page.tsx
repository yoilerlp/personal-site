import React from 'react'
import { Metadata } from 'next'

import { ProjectCard, Container, ProjectCardTags } from '@/components'
import { mocksProjects } from '@/helpers/mocks'
import { aboutMeShort } from '@/helpers/me'

type pageProps = {
  searchParams?: {
    [key: string]: string
  }
}

export const metadata: Metadata = {
  title: `My Work`,
  description: `
    ${aboutMeShort.es}
  `,
}

function MyWorkPage({ searchParams }: pageProps) {
  const tagsToSearch = searchParams?.tag ? searchParams?.tag?.split(',') : []

  const projectsToShow = mocksProjects?.filter((project) => {
    if (tagsToSearch?.length > 0) {
      return project.tags?.some((ptag) => tagsToSearch?.includes(ptag))
    }
    return true
  })

  const titleMB = tagsToSearch?.length > 0 ? 'md:mb-8' : 'md:mb-14'
  return (
    <main className='grow'>
      <Container>
        <div>
          <h1 className={` dark:text-primary text-title text-dark mb-5 ${titleMB} `}>Coding</h1>
          <div>
            {tagsToSearch ? (
              <ProjectCardTags
                activeTags={tagsToSearch}
                showDelete
                tags={tagsToSearch}
                className='mb-5'
              />
            ) : null}
          </div>
          <div className='grid grid-cols-1 gap-8 '>
            {projectsToShow.map((item, idx) => (
              <ProjectCard
                className='p-0 pb-5 border-b '
                key={idx}
                project={item}
              />
            ))}
          </div>
        </div>
      </Container>
    </main>
  )
}

export default MyWorkPage
