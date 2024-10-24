import PropTypes from 'prop-types';

const SkillsCard = ({ icon, title, text }) => {
  return (
    <article className='flex flex-col items-center text-center'>
      <span>{icon}</span>
      <h4 className='mt-6 font-bold'>{title}</h4>
      <p className='mt-2 text-slate-500'>{text}</p>
    </article>
  );
};

SkillsCard.propTypes = {
  icon: PropTypes.node.isRequired, // Validate icon as a React node
  title: PropTypes.string.isRequired, // Validate title as a string
  text: PropTypes.string.isRequired, // Validate text as a string
};

export default SkillsCard;
