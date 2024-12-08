import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='bg-deepBlue'>
      <NavBar />
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
