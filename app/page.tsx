import Link from 'next/link'
import Container from '@/components/Container'
import Hero from '@/components/Hero'
import PostCard from '@/components/PostCard'
import ProjectCard from '@/components/ProjectCard'
import { mocksProjects } from '@/helpers/mocks'
import { getAllMyPosts } from '@/services/blog'

export default async function Home() {
  const posts = await getAllMyPosts()

  return (
    <main className='w-full'>
      <Hero />
      <Container className='dark:bg-dark bg-blueLight pb-8 w-full'>
        <div className='flex justify-between items-center mb-1'>
          <h2 className=' dark:text-primary text-dark text-[1.375rem] leading-[60px]'>
            Blogs
          </h2>
          <Link
            className='dark:text-light text-secondary text-base leading-6 text-right hover:underline'
            href={'/blog'}
          >
            Ver todos
          </Link>
        </div>
        <div className='grid max-sm:grid-cols-1 grid-cols-posts gap-5 '>
          {posts.slice(0, 2).map((item, idx) => (
            <PostCard key={idx} post={item} />
          ))}
        </div>
      </Container>
      <Container className='pb-8 dark:bg-bgDark'>
        <div className='flex justify-between items-center mb-1'>
          <h2 className='dark:text-primary text-dark text-[1.375rem] leading-[60px]'>Coding</h2>
          <Link
            className='dark:text-light text-secondary text-base leading-6 text-right hover:underline'
            href={'/coding'}
          >
            Ver todos
          </Link>
        </div>
        <div className='flex flex-col gap-5 '>
          {mocksProjects.map((item, idx) => (
            <ProjectCard key={idx} project={item} />
          ))}
        </div>
      </Container>
    </main>
  )
}
