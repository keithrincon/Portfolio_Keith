import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact, FaGitAlt, FaFigma } from 'react-icons/fa';
import { SiTypescript, SiAdobe, SiNextdotjs, SiMongodb } from 'react-icons/si';
import keysubs from './assets/keysubs.png';
import gdl from './assets/GDL.png';
import prompt from './assets/prompt.png';
import dashboard from './assets/dashboard.png';
import bankist from './assets/bankist.png';
import fitlife from './assets/fitlife.png';
import backroads from './assets/backroads.png';
import mexvenues from './assets/mexvenues.png';
import resume1 from './assets/resume1.png';

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
    img: resume1,
    url: 'https://flowcv.com/resume/kup7sswq5r',
    github: undefined,
    title: 'my resume 💼',
    text: 'I created my resume using flowcv',
  },
  {
    id: nanoid(),
    img: keysubs,
    url: 'https://key-subs.vercel.app/',
    github: 'https://github.com/keithrincon/KeySubs',
    title: 'KeySubs helps sports team get the best athletes within their area.',
    text: 'full stack app using react next.JS, stripe, typescript, tailwindcss, vercel, MongoDB & clerk authentication',
  },
  // {
  //   id: nanoid(),
  //   img: 'https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800',
  //   url: 'https://home-away-navy.vercel.app/',
  //   github: 'https://github.com/keithrincon/homeAway',
  //   title: 'Home Away: a vacation rental app',
  //   text: 'Full stack app using react, typescript, prisma, vercel, supabase, clerk authentication',
  // },
  {
    id: nanoid(),
    img: gdl,
    url: 'https://guadalajara-rest.vercel.app/',
    github: 'https://github.com/keithrincon/guadalajara_rest',
    title:
      'guadalajara mexican restaurant listed two locations and offered online menus and more.',
    text: 'Used for our restaurant website. build using HTML, CSS, JS & vercel',
  },
  {
    id: nanoid(),
    img: prompt,
    url: 'https://project-promptopia-01.vercel.app/',
    github: 'https://github.com/keithrincon/project_promtopia',
    title: 'Promptopia: allows user to discover, create and share prompts',
    text: 'Full stack app using React, mongodb, vercel, next.js & google authentication.',
  },
  {
    id: nanoid(),
    img: dashboard,
    url: 'https://socialmediasdashboard.netlify.app/',
    github: 'https://github.com/keithrincon/Social-Media-Dashboard',
    title: 'A social media dashboard',
    text: 'HTML, CSS JavaScript & Netlify',
  },
  {
    id: nanoid(),
    img: bankist,
    url: 'https://bankistbank1.netlify.app/',
    github: 'https://github.com/keithrincon/Bankist-Site',
    title: 'A bank landing page with basic functionality',
    text: 'HTML, CSS JavaScript & Netlify',
  },
  {
    id: nanoid(),
    img: fitlife,
    url: 'https://fitlifegyms.netlify.app/',
    github: 'https://github.com/keithrincon/Bankist-Site',
    title: 'Fitlife Gyms: a gym landing page',
    text: 'HTML, CSS JavaScript & Netlify',
  },
  {
    id: nanoid(),
    img: backroads,
    url: 'https://backroadsapp12.netlify.app/#tours',
    github: 'https://github.com/keithrincon/backroads-app',
    title: 'Backroads: a travel agency landing page',
    text: 'HTML, CSS, JavaScript, React & Netlify',
  },
  {
    id: nanoid(),
    img: mexvenues,
    url: 'https://mexicoweddingvenues.netlify.app/',
    github: 'https://github.com/keithrincon/mexico_wedding_venues',
    title: 'Mexico Wedding Venues: a wedding venue landing page',
    text: 'HTML, CSS, JavaScript & Netlify',
  },
];
