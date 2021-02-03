import React, { useEffect, useRef } from 'react';

interface FooterProps {
  currentProject: string;
}

const Footer: React.FC<FooterProps> = ({ currentProject }) => {

    // 하단 프로젝트 이름 변경
    const descRef: any = useRef();
    const descRef2: any = useRef();

    const generateTitle = () => {
      if(currentProject === 'komma') {
        descRef.current.textContent = 'Komma';
        descRef2.current.textContent = '콤마';
      }
      else if(currentProject === 'onemeal') {
        descRef.current.textContent = 'One Meal';
        descRef2.current.textContent = '고독한 한끼';
      }
    }

    useEffect(() => {
      generateTitle();
    });

  return(
    <footer className='Main-footer'>
      <p>CONTACT</p>
      <p className='rightmenu'>ABOUT ME</p>
      <h2 ref={descRef}>Komma</h2>
      <h3 ref={descRef2}>콤마</h3>
    </footer>
  );
}

export default Footer;
