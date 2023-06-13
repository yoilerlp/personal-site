/** @type {import('next').NextConfig} */

const nextMDX = require('@next/mdx')

const withMDX = nextMDX({
  extensions: ['.mdx', '.md'],
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // providerImportSource: '@mdx-js/react',
  },
})

const nextConfig = {
  experimental: {
    // mdxRst: true,
  },
}

module.exports = withMDX(nextConfig)
