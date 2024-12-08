import { links } from '../data';

const NavBar = () => {
  return (
    <nav className='bg-deepBlue'>
      <div className='align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8'>
        <h2 className='text-3xl font-bold text-white'>Keith Rincon</h2>
        <div className='flex gap-x-3'>
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className='relative capitalize text-lg tracking-wide text-white font-semibold 
                          after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-red-500 
                          hover:after:w-full after:transition-all after:duration-300'
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
