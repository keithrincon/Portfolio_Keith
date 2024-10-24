import PropTypes from 'prop-types';
import { FaGithubSquare } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';

const ProjectCard = ({ url, img, github, title, text }) => {
  return (
    <article className='bg-white rounded-lg shadow-md hover:shadow-xl duration-300 '>
      <img
        src={img}
        alt={title}
        className='w-full object-contain rounded-t-lg h-64'
      />
      <div className='capitalize p-8 text-center'>
        <h2 className='text-xl tracking-wide font-medium h-16'>{title}</h2>
        <p className='mt-4 text-slate-700 leading-loose h-20'>{text}</p>
        <div className='mt-4 flex justify-center gap-x-8'>
          <a href={url}>
            <TbWorldWww className='h-8 w-8 text-blue-600 hover:text-black duration-300' />
          </a>
          {github && (
            <a href={github} target='_blank' rel='noopener noreferrer'>
              <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
ProjectCard.propTypes = {
  url: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  github: PropTypes.string,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ProjectCard;
