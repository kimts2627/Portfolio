import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

interface FooterProps {
  isMain: boolean;
  currentProject: string;
  isContactOn: boolean;
  handleContact: () => void;
  handleMovePage: () => void;
}

const Footer: React.FC<FooterProps> = ({
  currentProject,
  isContactOn,
  handleContact,
  isMain,
  handleMovePage
}) => {

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

  // ABOUT ME 페이지 이동 함수
  const transitionRef: any = useRef();
  const handlePage = () => {
    transitionRef.current.style.display = 'inline';
    setTimeout(() => {
      handleMovePage();
      window.location.href='/aboutme';
    }, 600);
  }

  // Email 클립보드에 복사
  const emailRef: any = useRef();
  const copyEmail: any = () => {
    emailRef.current.select();
    document.execCommand("Copy");
  }
  
  return(
    <footer className='Main-footer'>
      <p onClick={handleContact} className={isContactOn ? 'contact-open' : undefined}>CONTACT</p>
      <div className={isContactOn ? 'contact-circle-open' : 'contact-circle'}>
        <h4><a href="https://github.com/kimts2627" target='_blank'>Github</a></h4>
        <h4><a href="https://velog.io/@tsts_" target='_blank'>Velog</a></h4>
        <h4 className='mail' onClick={copyEmail}>E-mail</h4>
        <input type='text' className='input' value='kimtstststs@gmail.com' ref={emailRef}></input>
        <h4><a href="https://www.notion.so/Kim-Taesu-20bc3848588c4eba8831cc69666fe0d1" target='_blank'>Resume</a></h4>
      </div>
      <p className='rightmenu' onClick={handlePage}>ABOUT ME</p>
      <div className='transition-circle' ref={transitionRef}></div>
      {
        isMain ?
        <h2 ref={descRef}>Komma</h2> :
        null
      }
      {
        isMain ?
        <h3 ref={descRef2}>콤마</h3> :
        null
      }
    </footer>
  );
}

export default Footer;
