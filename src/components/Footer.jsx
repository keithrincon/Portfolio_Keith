const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='text-center py-4  mt-auto bg-royalBlue text-white'>
      <p>&copy; {currentYear} &bull; Keith Rincon &bull; All rights reserved</p>
    </footer>
  );
};
export default Footer;

//bg-gray-100
