import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact, FaGitAlt, FaFigma } from 'react-icons/fa';
import { SiTypescript, SiAdobe, SiNextdotjs, SiMongodb } from 'react-icons/si';

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML & CSS',
    icon: <FaHtml5 className='h-16 w-16 text-blue-500' />,
    text: '7 online courses that focus the basics, 2 of those were bootcamps. My goal was to fully understand the basics of web development.',
  },
  {
    id: nanoid(),
    title: 'JavaScript',
    icon: <FaJs className='h-16 w-16 text-blue-500' />,
    text: '3 online courses full of tutorials and projects. Hope to continue learning more about JavaScript and its frameworks.',
  },
  {
    id: nanoid(),
    title: 'Version Control',
    icon: <FaGitAlt className='h-16 w-16 text-blue-500' />,
    text: 'Learned the basics of Git and GitHub through online courses and bootcamps.',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-blue-500' />,
    text: '3 online courses that focus on React and its libraries. This site was built using React.',
  },
  {
    id: nanoid(),
    title: 'TypeScript',
    icon: <SiTypescript className='h-16 w-16 text-blue-500' />,
    text: 'Currently learning TypeScript through online course.',
  },
  {
    id: nanoid(),
    title: 'Next.js',
    icon: <SiNextdotjs className='h-16 w-16 text-blue-500' />,
    text: 'Built a few full stack project using Next.js. Hoping that a course will help me understand it better.',
  },
  {
    id: nanoid(),
    title: 'MongoDB',
    icon: <SiMongodb className='h-16 w-16 text-blue-500' />,
    text: 'Atleast 2 projects that have used MongoDB. I hope to learn more about it now that I understand APIs.',
  },
  {
    id: nanoid(),
    title: 'Figma',
    icon: <FaFigma className='h-16 w-16 text-blue-500' />,
    text: 'Learned the basics of Figma taking Metas Front-End Developers Course.',
  },
  {
    id: nanoid(),
    title: 'Adobe',
    icon: <SiAdobe className='h-16 w-16 text-blue-500' />,
    text: 'Self-taught while creating various marketing materials for our restaurant. The programs I use are Photoshop, Illustrator, and InDesign.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://key-subs.vercel.app/',
    github: 'https://github.com/keithrincon/KeySubs',
    title: 'keySubs: helps ahtletes find sports teams to join',
    text: 'full stack app using react next.JS, stripe, typescript, tailwindcss ',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://home-away-navy.vercel.app/',
    github: 'https://github.com/keithrincon/homeAway',
    title: 'Home Away: a vacation rental app',
    text: 'Full stack app using react, typescript, prisma, vercel, supabase, clerk authentication',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://guadalajararest.vercel.app/',
    github: 'https://github.com/keithrincon/guadalajara_rest',
    title: 'guadalajara mexican restaurant',
    text: 'Used for our restaurant website. build using HTML, CSS and JS',
  },
];
