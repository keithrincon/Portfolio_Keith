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
            my weaknesses turned into my strengths with time, grit, patience and
            consistency.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
