import Navbar from './Components/Navbar';
import { Checkbox } from 'semantic-ui-react';
import './App.css';
import Slides from './Components/Slides';
import Donations from './Components/Donations';
import HowFund from './Components/HowFund';
import WhyFund from './Components/WhyFund';
import Availability from './Components/Availability';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

import ResponsiveCarousel from './Components/ResponsiveCarousel';
import CardCarousel from './Components/CardCarousel';



function App() {
  return (
    <div className="App">
      <Checkbox className='ui toggle checkbox' floated='right'></Checkbox>
      
      <Navbar /><br/>
      <ResponsiveCarousel/><br/>
      <Slides /><br/>
      <Donations/><br/>
      <HowFund/><br/>
      <WhyFund/><br/>
      <CardCarousel/><br/>
      <Availability /><br/>
      <Contact /><br/>
      <Footer /><br/>
    </div>
  );
}

export default App;
