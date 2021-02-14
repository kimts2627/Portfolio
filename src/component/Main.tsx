import React, { useEffect, useRef } from 'react';
import Header from './Header';
import Footer from './Footer';
import Projects from './Projects';

interface MainProps {
  width: number;
  isMain: boolean;
  degree: number;
  isContactOn: boolean;
  currentProject: string;
  changeCurrentProject: () => void;
  handleDegree: (newDegree: number) => void;
  handleContact: () => void;
  handleMovePage: () => void;
  handleWidth: (width: number) => void;
}

const Main: React.FC<MainProps> = ({
  width,
  isMain,
  degree,
  isContactOn,
  currentProject,
  changeCurrentProject,
  handleDegree,
  handleContact,
  handleMovePage,
  handleWidth
}) => {

  // 현재 프로젝트 및 배경컬러 변경
  const fadeRef1: any = useRef();
  const fadeRef2: any = useRef();

  // width 자동 업데이트
  useEffect(() => {
    handleWidth(window.innerWidth);
    window.addEventListener('resize', () => handleWidth(window.innerWidth));
    return () => {
      window.addEventListener('resize', () => handleWidth(window.innerWidth));
    }
  }, []);

  // 배경 컬러 이펙트 변경
  useEffect(() => {
    changeCurrentProject();
    if(degree > 261) {
      fadeRef1.current.style.backgroundColor = 'rgb(209, 221, 255)';
      fadeRef2.current.style.backgroundColor = 'rgb(209, 221, 255)';
    }
    else {
      fadeRef1.current.style.backgroundColor = 'rgb(248, 255, 185)';
      fadeRef2.current.style.backgroundColor = 'rgb(248, 255, 185)';
    }
  }, [degree]);

  // 배경 프로젝트 이름 변경
  const generateTitle = () => {
    if(currentProject === 'komma') {
      return 'K o m m a';
    }
    else if(currentProject === 'onemeal') {
      return 'One Meal';
    }
  }

  // 타이틀 변경 애니메이션
  const titleRef: any = useRef();

  useEffect(() => {
    titleRef.current.style.animation = 'changeTitle 0.2s ease forwards'
    setTimeout(() => {
      titleRef.current.style.animation = 'none'
    }, 200);
  }, [currentProject]);

  return(
    <main className='Main'>
      <div className='tutorial'>
        {width > 900 ? 'Scroll to Explore' : 'Touch Move to Explore'}
      </div>
      <div className='Main-effect'>
        <div className='fade1' ref={fadeRef1}/>
        <div className='fade2'ref={fadeRef2}/>
      </div>
      <Header isMain={isMain} handleMovePage={handleMovePage}/>
      <Footer
        currentProject={currentProject}
        handleContact={handleContact}
        isContactOn={isContactOn}
        isMain={isMain}
        handleMovePage={handleMovePage}
      />
      <Projects degree={degree} handleDegree={handleDegree}/>
      <h1 className='Main-title' ref={titleRef}>{generateTitle()}</h1>
    </main>
  );
}

export default Main;
