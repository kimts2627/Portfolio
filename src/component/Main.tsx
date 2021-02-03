import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Projects from './Projects';

interface MainProps {
  degree: number;
  isContactOn: boolean;
  currentProject: string;
  changeCurrentProject: () => void;
  handleDegree: (newDegree: number) => void;
}

const Main: React.FC<MainProps> = ({
  degree,
  isContactOn,
  currentProject,
  changeCurrentProject,
  handleDegree
}) => {

  // 현재 프로젝트 변경
  useEffect(() => {
    changeCurrentProject();
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

  return(
    <main className='Main'>
      <div className='Main-effect'>
        <div className='fade1'/>
        <div className='fade2'/>
      </div>
      <Header />
      <Footer currentProject={currentProject}/>
      <Projects degree={degree} handleDegree={handleDegree}/>
      <h1 className='Main-title'>{generateTitle()}</h1>
    </main>
  );
}

export default Main;
