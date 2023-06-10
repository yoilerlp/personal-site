import Container from '@/components/Container'
import Hero from '@/components/Hero'
import PostCard from '@/components/PostCard'
import ProjectCard from '@/components/ProjectCard'
import Link from 'next/link'

const mockPosts = [
  {
    title: 'Making a design system from scratch',
    description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
    sint. Velit officia consequat duis enim velit mollit. Exercitation
    veniam consequat sunt nostrud amet.
    et minim mollit non deserunt ullamco est sit aliqua dolor do amet
    sint. Velit officia consequat duis enim velit mollit. Exercitation
    veniam consequat sunt nostru
    et minim mollit non deserunt ullamco est sit aliqua dolor do amet
    sint. Velit officia consequat duis enim velit mollit. Exercitation
    veniam consequat sunt nostru
    et minim mollit non deserunt ullamco est sit aliqua dolor do amet
    sint. Velit officia consequat duis enim velit mollit. Exercitation
    veniam consequat sunt nostru
    et minim mollit non deserunt ullamco est sit aliqua dolor do amet
    sint. Velit officia consequat duis enim velit mollit. Exercitation
    veniam consequat sunt nostru

    et minim mollit non deserunt ullamco est sit aliqua dolor do amet
    sint. Velit officia consequat duis enim velit mollit. Exercitation
    veniam consequat sunt nostru
    `,
    slug: '',
    date: '12 Feb 2020',
    tags: ['Design', 'Pattern'],
  },
  {
    title:
      'Making a design system from scratch 12312 sdkajsldkas sadasds asdas asdasd asd as',
    description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
    sint. Velit officia consequat duis enim velit mollit. Exercitation
    veniam consequa`,
    slug: '',
    date: '12 Feb 2020',
    tags: ['Design', 'Pattern', 'Code', 'Life', 'Life', 'Life', 'Lasdasd dasd'],
  },
  {
    title: 'asdasd a design system ',
    description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
    sint. Velit officia consequat duis enim velit mollit. Exercitation
    veniam consequat sunt nostrud amet. asdsa sad asdasdkjdaskljd laskjdklasjdlkas
    asdkasjdhaskldjaskl jdsla sdaskui asdukjasdiasd asdasidkasdasdas
    kslajasdkjasl sadklasjuds sadlkasdjasldk klosjloikkl;;alsjkdl;as sadasldsa asdasd asdastv asdasdasd
    asdqweqwev sadasdadasdasdas`,
    slug: '',
    date: '31 Diciembre 2023',
    tags: ['Design', 'Pattern', 'Code', 'Life'],
  },
  {
    title: 'asdasd a design system ',
    description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
    sint. Velit officia consequat duis enim velit mollit. Exercitation
    veniam consequat sunt nostrud amet. asdsa sad asdasdkjdaskljd laskjdklasjdlkas
    asdkasjdhaskldjaskl jdsla sdaskui asdukjasdiasd asdasidkasdasdas
    kslajasdkjasl sadklasjuds sadlkasdjasldk klosjloikkl;;alsjkdl;as sadasldsa asdasd asdastv asdasdasd
    asdqweqwev sadasdadasdasdas`,
    slug: '',
    date: '31 Diciembre 2023',
    tags: ['Design', 'Pattern', 'Code', 'Life'],
  },
  {
    title: 'asdasd a design system ',
    description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
    sint. Velit officia consequat duis enim velit mollit. Exercitation
    veniam consequat sunt nostrud amet. asdsa sad asdasdkjdaskljd laskjdklasjdlkas
    asdkasjdhaskldjaskl jdsla sdaskui asdukjasdiasd asdasidkasdasdas
    kslajasdkjasl sadklasjuds sadlkasdjasldk klosjloikkl;;alsjkdl;as sadasldsa asdasd asdastv asdasdasd
    asdqweqwev sadasdadasdasdas`,
    slug: '',
    date: '31 Diciembre 2023',
    tags: ['Design', 'Pattern', 'Code', 'Life'],
  },
  {
    title: 'asdasd a design system ',
    description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
    sint. Velit officia consequat duis enim velit mollit. Exercitation
    veniam consequat sunt nostrud amet. asdsa sad asdasdkjdaskljd laskjdklasjdlkas
    asdkasjdhaskldjaskl jdsla sdaskui asdukjasdiasd asdasidkasdasdas
    kslajasdkjasl sadklasjuds sadlkasdjasldk klosjloikkl;;alsjkdl;as sadasldsa asdasd asdastv asdasdasd
    asdqweqwev sadasdadasdasdas`,
    slug: '',
    date: '31 Diciembre 2023',
    tags: ['Design', 'Pattern', 'Code', 'Life'],
  },
  {
    title: 'asdasd a design system ',
    description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
    sint. Velit officia consequat duis enim velit mollit. Exercitation
    veniam consequat sunt nostrud amet. asdsa sad asdasdkjdaskljd laskjdklasjdlkas
    asdkasjdhaskldjaskl jdsla sdaskui asdukjasdiasd asdasidkasdasdas
    kslajasdkjasl sadklasjuds sadlkasdjasldk klosjloikkl;;alsjkdl;as sadasldsa asdasd asdastv asdasdasd
    asdqweqwev sadasdadasdasdas`,
    slug: '',
    date: '31 Diciembre 2023',
    tags: ['Design', 'Pattern', 'Code', 'Life'],
  },
]


const mocksProjects = [
  {
    title: 'Designing Dashboards',
    category: 'Dashboard',
    year: 2020,
    description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`
  },
  {
    title: 'Vibrant Portraits of 2020',
    category: 'Illustration',
    year: 2018,
    description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`
  },
  {
    title: '36 Days of Malayalam type',
    category: 'Typography',
    year: 2018,
    description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`
  }
]

export default function Home() {
  return (
    <main className='w-full'>
      <Hero />
      <Container className='bg-blueLight pb-8 border border-primary w-full'>
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
          {mockPosts.slice(0,2).map((item, idx) => (
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
