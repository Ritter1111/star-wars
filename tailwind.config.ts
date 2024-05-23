import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: 'var(--accent)',
        sectionBackground: 'var(--sectionBackground)',
        yellow: 'var( --yellow)',
        hoverBackground: 'var(--hoverBackground)',
      },
      backgroundImage: {
        logo: 'url(/svgs/Star_Wars_Logo.svg)',
      },
    },
  },
  plugins: [],
};
export default config;
