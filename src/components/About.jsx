import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';

const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} alt='about me image' className='w-full h-64' />
        <article>
          <SectionTitle text='coding journey' />
          <p className='text-slate-600 mt-8 leading-loose'>
            My journey into web development began with a personal project —
            upgrading my family's restaurant website. I started with WordPress,
            but my curiosity led me to dive deeper, eventually rebuilding the
            site using HTML, CSS, Bootstrap, and a little JavaScript. <br />
            In 2019, I had an idea for an app and decided to build it myself,
            not realizing it would spark a complete career change. As a
            self-taught developer, the path wasn’t always easy. I often found
            myself stuck on issues with no one to ask for help. Still, I kept
            going. That was until ChatGPT came into the picture, where I found
            the support I needed to overcome obstacles and keep improving.
            <br /> Now, in 2024, I feel confident that I have what it takes to
            succeed in tech. It’s a field that demands energy, focus, hand-eye
            coordination, patience, networking skills, and a constant drive to
            learn. I’m ready to take my next step—joining a team where I can
            continue growing as a developer. If you're reading this, I’ve likely
            knocked on your door, eager to prove I’m a better developer today
            than I was yesterday. Thank you for your time, and I hope you have a
            wonderful day!
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
