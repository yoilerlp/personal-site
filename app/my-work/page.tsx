import React from 'react'
import { ProjectCard, Container } from '@/components'
import { mocksProjects } from '@/helpers/mocks'

function MyWorkPage() {
  return (
    <main className='grow'>
      <Container>
        <div className=' pt-8  md:pt-14'>
          <h1 className='text-title text-dark mb-5 md:mb-14'>My Work</h1>
          <div className='grid grid-cols-1 gap-8 '>
            {mocksProjects.slice(0, 10).map((item, idx) => (
              <ProjectCard className='p-0 pb-5 border-b ' key={idx} project={item} />
            ))}
          </div>
        </div>
      </Container>
    </main>
  )
}

export default MyWorkPage
