import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  isMain: boolean;
  handleMovePage: () => void;
}

const Header: React.FC<HeaderProps> = ({ isMain, handleMovePage }) => {


  return(
    <header className='Main-header'>
      <Link to='/'><p>KIM TAESU</p></Link>
      <p className='rightmenu'></p>
    </header>
  );
}

export default Header;
