import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  isMain: boolean;
  handleMovePage: () => void;
}

const Header: React.FC<HeaderProps> = ({ isMain, handleMovePage }) => {

  // main이 아닐 시 글자 색 white
  const nameRef: any = useRef();
  useEffect(() => {
    console.log(window.location.href)
    if(window.location.href === 'https://taesufolio.com/aboutme') {
      nameRef.current.style.color = 'white';
    }
    else {
      nameRef.current.style.color = 'black';
    }
  }, []);

  return(
    <header className='Main-header'>
      <Link to='/'><p ref={nameRef} >KIM TAESU</p></Link>
      <p className='rightmenu'></p>
    </header>
  );
}

export default Header;
