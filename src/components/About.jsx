// import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';
import journeyPng from '../assets/journey.png';

const About = () => {
  return (
    <section className='bg-deepBlue py-20' id='about'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        <img
          src={journeyPng}
          // src={aboutSvg}
          alt='about me image'
          className='h-80 lg:h-96 md:mx-auto object-cover border-4 border-navyShade rounded-lg shadow-[0_35px_60px_-15px_rgba(255,255,255,0.5)] mx-auto'
        />
        <article className='text-white'>
          <SectionTitle text='coding journey' />

          <p className='text-white mt-8 leading-loose'>
            My journey into web development began with a challenge close to
            home—
            <span className='font-bold'>
              upgrading my family&apos;s restaurant website
            </span>
            . Initially, I used <span className='font-bold'>WordPress</span> to
            get the job done, but soon my curiosity took over, and I decided to
            build it from scratch using{' '}
            <span className='font-bold'>HTML, CSS, Bootstrap,</span> and{' '}
            <span className='font-bold'>JavaScript</span>. Since then, I&apos;ve
            transformed my passion for problem-solving into a{' '}
            <span className='font-bold'>full-fledged career in tech</span>.
            <br />
            In 2019, I had an idea for an app and took on the task of building
            it myself. That project became a pivotal point, pushing me further
            into <span className='font-bold'>web development</span> and
            solidifying my commitment to the field. As a{' '}
            <span className='font-bold'>self-taught developer</span>, I&apos;ve
            encountered my share of roadblocks, but each challenge strengthened
            my skills and <span className='font-bold'>adaptability</span>. Tools
            like <span className='font-bold'>ChatGPT</span> became invaluable as
            I continued advancing and overcoming complex coding issues
            independently.
            <br />
            Today, in 2024, I&apos;m confident in my abilities and excited to
            join a team where I can{' '}
            <span className='font-bold'>contribute meaningfully</span>. Over the
            past few years, I&apos;ve developed{' '}
            <span className='font-bold'>
              full-stack applications from scratch
            </span>
            , utilizing modern frameworks like{' '}
            <span className='font-bold'>React, Next.js, TypeScript,</span> and{' '}
            <span className='font-bold'>MongoDB</span>. I&apos;ve honed my
            skills across the stack, from{' '}
            <span className='font-bold'>responsive front-end design</span> to{' '}
            <span className='font-bold'>efficient back-end development</span>.
            <br />
            <span className='font-bold'>Tech</span> is an ever-evolving field,
            requiring{' '}
            <span className='font-bold'>adaptability, resilience,</span> and a
            commitment to <span className='font-bold'>continuous learning</span>
            —all qualities I bring to the table. I&apos;m thrilled about the
            possibility of contributing my skills to a team, tackling{' '}
            <span className='font-bold'>real-world challenges</span>, and
            growing as a <span className='font-bold'>developer</span>. If
            you&apos;re reading this, I&apos;d love to connect and discuss how I
            can bring value to your organization. Thank you for your time, and I
            look forward to hearing from you soon!
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
