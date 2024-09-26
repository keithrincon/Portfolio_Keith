import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import developer from '../assets/developer.svg';

const Hero = () => {
  return (
    <div className='bg-blue-200 py-24'>
      <div className='align-element grid md:grid-cols-2 items-center gap-8'>
        <article>
          <h1 className='text-7xl font-bold tracking-wider'>
            Hi, I&#39;m <span class='text-blue-600'>Keith</span>
          </h1>
          <p className='mt-4 text-3xl text-slate-700 capitalize tracking-wide'>
            Front-End Developer
          </p>
          <p className='mt-2 text-lg text-slate-700 capitalize tracking-wide'>
            Follow me as I break into tech as a self-taught developer. <br />
            📍 Northern California, USA
            <br /> ✅ Open to work
          </p>
          <div className='flex gap-x-4 mt-4'>
            <a href='https://github.com/keithrincon'>
              <FaGithubSquare className='h-10 w-10 text-blue-500 hover:text-black duration-300' />
            </a>
            <a href='https://www.linkedin.com/in/keithrincon/'>
              <FaLinkedin className='h-10 w-10 text-blue-500 hover:text-black duration-300' />
            </a>
            <a href='https://x.com/keithrincont'>
              <FaSquareXTwitter className='h-10 w-10 text-blue-500 hover:text-black duration-300' />
            </a>
            <a href='mailto:keithrincont@gmail.com'>
              <MdEmail className='h-11 w-11 text-blue-500 hover:text-black duration-300' />
            </a>
          </div>
        </article>
        <article className='hidden md:block'>
          <img
            src={developer}
            alt='person programming'
            className='h-80 lg:h-96'
          />
        </article>
      </div>
    </div>
  );
};

export default Hero;
