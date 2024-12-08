import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import developer from '../assets/developer.svg';
import aboutPng from '../assets/about.png';

const Hero = () => {
  return (
    <div className='bg-deepBlue py-24'>
      <div className='align-element grid grid-cols-1 md:grid-cols-2 md:gap-8 items-center text-center md:text-left'>
        <article className='flex flex-col items-center md:items-start'>
          <h1 className='text-5xl font-bold tracking-wider text-white'>
            Hi, I&#39;m <span>Keith</span>
          </h1>
          <p className='mt-4 text-3xl capitalize tracking-wide text-white'>
            Full-stack web developer
          </p>
          <br />
          <p className='mt-2 text-lg text-white tracking-wide'>
            📍 Northern California, USA
            <br /> ✅ Open to Work
            <br />
            <br />
            Building impactful web solutions that <br /> drive results and
            elevate user experiences.
          </p>
          <br />
          <div className='flex gap-x-4 mt-4 justify-center md:justify-start'>
            <a href='https://github.com/keithrincon'>
              <FaGithubSquare className='h-10 w-10 text-customRed hover:brightness-75 transition duration-300' />
            </a>
            <a href='https://www.linkedin.com/in/keithrincon/'>
              <FaLinkedin className='h-10 w-10 text-customRed hover:brightness-75 transition duration-300' />
            </a>
            <a href='https://x.com/keithrincont'>
              <FaSquareXTwitter className='h-10 w-10 text-customRed hover:brightness-75 transition duration-300' />
            </a>
            <a href='mailto:keithrincont@gmail.com'>
              <MdEmail className='h-11 w-11 text-customRed hover:brightness-75 transition duration-300' />
            </a>
          </div>
        </article>
        <article className='hidden md:block'>
          <img
            src={aboutPng}
            alt='person programming'
            className='h-80 lg:h-96 md:mx-auto object-cover border-4 border-navyShade rounded-lg shadow-[0_35px_60px_-15px_rgba(255,255,255,0.5)] mx-auto'
          />
        </article>
      </div>
    </div>
  );
};

export default Hero;
