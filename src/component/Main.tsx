import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Projects from './Projects';

const Main: React.FC = () => {

  return(
    <div className='Main'>
      <Header />
      <Footer />
      <Projects />
      <h1 className='Main-title'>Komma</h1>
    </div>
  );
}

export default Main;
