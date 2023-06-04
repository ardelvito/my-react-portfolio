import logo from './logo.svg';
import './App.css';

import Hero from './components/hero/Hero';
import Navigationbar from './components/navigationbar/Navigationbar';
import Experiences from './components/experiences/Experiences';
import Portfolios from './components/portfolios/Portfolios';
import Testimonials from './components/testimonials/Testimonial'
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Navigationbar/>
      <Experiences/>
      <Portfolios/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
