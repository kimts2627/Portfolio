import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {

  return(
    <header className='Main-header'>
      <Link to='/'><p>KIM TAESU</p></Link>
      <p className='rightmenu'></p>
    </header>
  );
}

export default Header;
