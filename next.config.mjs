import nextMDX from '@next/mdx'

const withMDX = nextMDX({
  extensions: ['.mdx', '.md'],
  options: {
    // providerImportSource: '@mdx-js/react',
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  // mdxRs: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
      },
    ],
  },
}

export default withMDX(nextConfig)
