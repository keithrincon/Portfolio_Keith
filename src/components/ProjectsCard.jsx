import PropTypes from 'prop-types';
import { FaGithubSquare } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';

const ProjectCard = ({ url, img, github, title, text }) => {
  return (
    <article className='bg-royalBlue rounded-lg shadow-md hover:shadow-xl border-4 border-navyShade hover:border-goldenYellow duration-300'>
      <img
        src={img}
        alt={title}
        className='w-full object-contain rounded-t-lg h-64'
      />
      <div className='capitalize p-8 text-center'>
        <h2 className='text-xl tracking-wide font-medium h-16'>{title}</h2>
        <p className='mt-4 text-white leading-loose h-20'>{text}</p>
        <div className='mt-4 flex justify-center gap-x-8'>
          <a href={url}>
            <TbWorldWww className='h-8 w-8 text-white hover:text-goldenYellow duration-300' />
          </a>
          {github && (
            <a href={github} target='_blank' rel='noopener noreferrer'>
              <FaGithubSquare className='h-8 w-8 text-white hover:text-goldenYellow duration-300' />
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
