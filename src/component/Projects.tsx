import React, { useEffect, useRef } from 'react';
import komma1 from '../img/komma1.png';
import komma2 from '../img/komma2.png';
import onemeal1 from '../img/onemeal1.png';
import onemeal2 from '../img/onemeal2.png';

interface ProjectsProps {
  degree: number;
  width: number;
  handleDegree: (newDegree: number) => void;
}

const Projects: React.FC<ProjectsProps> = ({ degree, handleDegree, width }) => {
  let newDeg: number = degree;
  let ProjectRef: any = useRef();

  // 마우스 휠 이벤트
  useEffect(() => {
    window.addEventListener('mousewheel', (delta: any) => {
      if(delta.wheelDelta >= 3) {
        ProjectRef.current.style.transform = `rotate(${newDeg}deg)`;
        newDeg = newDeg + 0.6;
        console.log(newDeg);
      }
      else if(delta.wheelDelta <= -3) {
        ProjectRef.current.style.transform = `rotate(${newDeg}deg)`;
        newDeg = newDeg - 0.6;
        console.log(newDeg);
      }
      if(newDeg < 252) {
        newDeg = 252;
      }
      else if(newDeg > 270) {
        newDeg = 270;
      }
      handleDegree(newDeg);
    })
  }, []);

  // 터치 이벤트 
  useEffect(() => {
    let xLocation: number;
    let isTouched: boolean = false;
    //* 터치 시작
    ProjectRef.current.addEventListener('touchstart', (e: any) => {
      isTouched = true;
      xLocation = e.touches[0].clientX;
      console.log(xLocation);
    }, false);
    //* 터치 무브
    ProjectRef.current.addEventListener('touchmove', (e: any) => {
      if(isTouched) {
        e.preventDefault();
        let movedXLocation: number = (e.touches[0].clientX - xLocation);
        console.log(movedXLocation);
        newDeg = Math.floor(newDeg + movedXLocation);
        if(newDeg < 252) {
          newDeg = 252;
        }
        else if(newDeg > 270) {
          newDeg = 270;
        }
        ProjectRef.current.style.transform = `rotate(${newDeg}deg)`;
        handleDegree(newDeg)
      }
    }, { passive: false });
    //* 터치 종료
    ProjectRef.current.addEventListener('touchend', (e: any) => {
      isTouched = false;
    });
  }, []);

  return(
    <div className='projects' ref={ProjectRef}>
      <span>
        <a href='https://komma.co.kr' target='_blank'>
          <img src={komma2}/>
        </a>
      </span>
      <span>
        <a href='https://onemeal.xyz' target='_blank'>
          <img src={onemeal1}/>
        </a>
      </span>
    </div>
  );
}

export default Projects;
