import { useState } from 'react';
import Nav from './components/nav/Nav.jsx';
import Hero from './components/hero/Hero.jsx';
import Functions from './components/functions/Functions.jsx';
import About from './components/about/About.jsx';
import Contact from './components/contact/Contact.jsx';
import Footer from './components/footer/Footer.jsx';
import Prices from './components/prices/Prices.jsx';
import Awards from './components/awards/Awards.jsx';
import Opinions from './components/opinions/Opinions.jsx';

function App() {
  return (
    <>
      <Nav></Nav>
      <Hero></Hero>
      <Functions></Functions>
      <About></About>
      <Awards></Awards> 
      <Prices></Prices>
      <Opinions></Opinions>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
