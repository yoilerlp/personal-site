/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        blueLight: 'var(--blue-light)',
        dark: 'var(--dark)',
        light: 'var(--light)',
      },
      backgroundImage: {},
      gridTemplateColumns: {
        posts: 'repeat(auto-fill, minmax(418px, 1fr))',
      }
    },
    fontSize: {
      title: ['2.75rem', {
        fontWeight: 'bold',
        lineHeight: '60px',
      }],
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
