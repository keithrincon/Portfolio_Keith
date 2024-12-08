import { nanoid } from 'nanoid';
import {
  FaHtml5,
  FaJs,
  FaReact,
  FaFigma,
  FaCcStripe,
  FaGithub,
  FaBug,
  FaUser,
} from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { CiServer } from 'react-icons/ci';
import {
  SiTypescript,
  SiAdobe,
  SiNextdotjs,
  SiMongodb,
  SiSanity,
} from 'react-icons/si';
import keysubs from './assets/keysubs.png';
import gdl from './assets/GDL.png';
import prompt from './assets/prompt.png';
import dashboard from './assets/dashboard.png';
import bankist from './assets/bankist.png';
import fitlife from './assets/fitlife.png';
import backroads from './assets/backroads.png';
import mexvenues from './assets/mexvenues.png';
import lnn from './assets/lnn.png';
import udt from './assets/udt.png';
import homeaway from './assets/homeaway.png';
import YC from './assets/YC.png';

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
    icon: <FaHtml5 className='h-16 w-16 text-goldenYellow' />,
    text: '7 online courses that focus the basics, 2 of those were bootcamps. My goal was to fully understand the basics of web development.',
  },
  {
    id: nanoid(),
    title: 'JavaScript',
    icon: <FaJs className='h-16 w-16 text-goldenYellow' />,
    text: '3 online courses full of tutorials and projects. Hope to continue learning more about JavaScript and its frameworks.',
  },
  {
    id: nanoid(),
    title: 'TypeScript',
    icon: <SiTypescript className='h-16 w-16 text-goldenYellow' />,
    text: 'I used TypeScript to enhance code quality and maintainability, providing type safety and reducing runtime errors throughout the application.',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-goldenYellow' />,
    text: 'I used React to build interactive and dynamic user interfaces, implementing reusable components and efficient state management for a smooth and responsive user experience.',
  },
  {
    id: nanoid(),
    title: 'Next.js',
    icon: <SiNextdotjs className='h-16 w-16 text-goldenYellow' />,
    text: 'I used Next.js to build a fast, scalable, and SEO-friendly web application, leveraging its server-side rendering and static site generation capabilities for optimal performance and user experience.',
  },
  {
    id: nanoid(),
    title: 'Tailwind CSS',
    icon: <RiTailwindCssFill className='h-16 w-16 text-goldenYellow' />,
    text: 'I used Tailwind CSS for rapid and responsive styling, applying utility-first classes to create a clean, customizable, and consistent design across the app.',
  },
  {
    id: nanoid(),
    title: 'Figma',
    icon: <FaFigma className='h-16 w-16 text-goldenYellow' />,
    text: 'Learned the basics of Figma taking Metas Front-End Developers Course.',
  },
  {
    id: nanoid(),
    title: 'Adobe',
    icon: <SiAdobe className='h-16 w-16 text-goldenYellow' />,
    text: 'Self-taught while creating various marketing materials for our restaurant. The programs I use are Photoshop, Illustrator, and InDesign.',
  },
  {
    id: nanoid(),
    title: 'MongoDB',
    icon: <SiMongodb className='h-16 w-16 text-goldenYellow' />,
    text: 'I used MongoDB as the database solution to store and manage dynamic data, leveraging its flexibility and scalability for handling complex data structures in the application.',
  },
  {
    id: nanoid(),
    title: 'Sanity',
    icon: <SiSanity className='h-16 w-16 text-goldenYellow' />,
    text: 'I used Sanity as a headless CMS to manage and deliver dynamic content, enabling seamless updates and a flexible structure for scaling the app’s content across different platforms.',
  },
  {
    id: nanoid(),
    title: 'Stripe',
    icon: <FaCcStripe className='h-16 w-16 text-goldenYellow' />,
    text: 'Successfully integrated Stripe it into the HomeAway app.',
  },
  {
    id: nanoid(),
    title: 'Version Control',
    icon: <FaGithub className='h-16 w-16 text-goldenYellow' />,
    text: 'Learned the basics of Git and GitHub through online courses and bootcamps.',
  },
  {
    id: nanoid(),
    title: 'Sentry',
    icon: <FaBug className='h-16 w-16 text-goldenYellow' />,
    text: 'To monitor errors and track performance issues in real-time, allowing me to quickly identify and resolve bugs, ultimately enhancing the app’s reliability and user experience.',
  },
  {
    id: nanoid(),
    title: 'Hosting & Deployment',
    icon: <CiServer className='h-16 w-16 text-goldenYellow' />,
    text: 'Used to uploading projects using Vercel, Netlify, BlueHost, GoDaddy and more.',
  },
  {
    id: nanoid(),
    title: 'Soft Skills',
    icon: <FaUser className='h-16 w-16 text-goldenYellow' />,
    text: 'I bring strong soft skills such as effective communication, collaboration, problem-solving, and adaptability, which have been essential in working within teams, understanding client needs, and delivering high-quality results.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: YC,
    url: 'https://yc-directory-ivory.vercel.app/',
    github: 'https://github.com/keithrincon/yc-directory',
    title: 'YC Directory: Pitch Your Startup',
    text: 'full stack app using react 19 next.JS 15, sanity, typescript, tailwindcss, vercel, shadCN, sentry',
  },
  {
    id: nanoid(),
    img: homeaway,
    url: 'https://homeaway-chi.vercel.app/',
    github: 'https://github.com/keithrincon/homeaway',
    title: 'HomeAway: Vacation Rentals',
    text: 'full stack app using react next.JS, stripe, typescript, tailwindcss, vercel, MongoDB & clerk authentication',
  },
  {
    id: nanoid(),
    img: keysubs,
    url: 'https://key-subs.vercel.app/',
    github: 'https://github.com/keithrincon/KeySubs',
    title: 'KeySubs: Sports Team Finder',
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
    title: 'Guadalajara Restaurants: Website',
    text: 'Used for our restaurant website. build using HTML, CSS, JS & vercel',
  },
  {
    id: nanoid(),
    img: lnn,
    url: 'https://lanuevanuvedad.vercel.app/',
    github: 'https://github.com/keithrincon/Music-band-site',
    title: 'la Nueva Novedad: musician website ',
    text: 'build using HTML, CSS, JS, React, vercel and more.',
  },
  {
    id: nanoid(),
    img: prompt,
    url: 'https://project-promptopia-01.vercel.app/',
    github: 'https://github.com/keithrincon/project_promtopia',
    title: 'promptopia: aI prompts sharing app',
    text: 'Full stack app using React, mongodb, vercel, next.js & google authentication.',
  },
  {
    id: nanoid(),
    img: dashboard,
    url: 'https://socialmediasdashboard.netlify.app/',
    github: 'https://github.com/keithrincon/Social-Media-Dashboard',
    title: 'social media dashboard',
    text: 'HTML, CSS JavaScript & Netlify',
  },
  {
    id: nanoid(),
    img: bankist,
    url: 'https://bankistbank1.netlify.app/',
    github: 'https://github.com/keithrincon/Bankist-Site',
    title: 'bankist: bank landing page',
    text: 'HTML, CSS JavaScript & Netlify',
  },
  {
    id: nanoid(),
    img: fitlife,
    url: 'https://fitlifegyms.netlify.app/',
    github: 'https://github.com/keithrincon/Bankist-Site',
    title: 'fitlife gyms: gym landing page',
    text: 'HTML, CSS JavaScript & Netlify',
  },
  {
    id: nanoid(),
    img: backroads,
    url: 'https://backroadsapp12.netlify.app/#tours',
    github: 'https://github.com/keithrincon/backroads-app',
    title: 'backroads: travel agency landing page',
    text: 'HTML, CSS, JavaScript, React & Netlify',
  },
  {
    id: nanoid(),
    img: mexvenues,
    url: 'https://mexicoweddingvenues.netlify.app/',
    github: 'https://github.com/keithrincon/mexico_wedding_venues',
    title: 'mexico wedding venues',
    text: 'HTML, CSS, JavaScript & Netlify',
  },
  {
    id: nanoid(),
    img: udt,
    url: 'https://uniondeportivo.netlify.app/',
    github: 'https://github.com/keithrincon/UDT-FC-Official',
    title: 'UDT club deportivo: youth soccer team website',
    text: 'HTML, CSS, JavaScript & Netlify',
  },
];
