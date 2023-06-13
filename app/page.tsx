import Container from '@/components/Container'
import Hero from '@/components/Hero'
import PostCard from '@/components/PostCard'
import ProjectCard from '@/components/ProjectCard'
import { getAllPosts } from '@/helpers/blog'
import { mockPosts, mocksProjects } from '@/helpers/mocks'
import Link from 'next/link'



export default async function Home() {

  const posts = await getAllPosts()

  return (
    <main className='w-full'>
      <Hero />
      <Container className='bg-blueLight pb-8 w-full'>
        <div className='flex justify-between items-center mb-1'>
          <h2 className='text-dark text-[1.375rem] leading-[60px]'>
            Recent posts
          </h2>
          <Link
            className='text-secondary text-base leading-6 text-right hover:underline'
            href={'/blog'}
          >
            View all
          </Link>
        </div>
        <div className='grid max-sm:grid-cols-1 grid-cols-posts gap-5 '>
          {posts.slice(0,2).map((item, idx) => (
            <PostCard key={idx} post={item} />
          ))}
        </div>
      </Container>
      <Container className='pb-8'>
        <div className='flex justify-between items-center mb-1'>
          <h2 className='text-dark text-[1.375rem] leading-[60px]'>
            Featured works
          </h2>
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
