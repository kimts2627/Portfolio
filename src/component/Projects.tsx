import React, { useEffect, useRef } from 'react';
import komma1 from '../img/komma1.png';

const Projects: React.FC = () => {

  let ProjectRef: any = useRef();
  let degree: number = 234;
  useEffect(() => {
      ProjectRef.current.style.transform = `rotate(${degree}deg)`;
      window.addEventListener('mousewheel', (delta: any) => {
        if(delta.wheelDelta >= 3) {
          //console.log('++');
          // console.log(delta.wheelDelta);
          ProjectRef.current.style.transform = `rotate(${degree}deg)`;
          degree = degree - 0.3;
          console.log(degree);
        }
        else if(delta.wheelDelta <= -3) {
          //console.log('--');
          // console.log(delta.wheelDelta);
          ProjectRef.current.style.transform = `rotate(${degree}deg)`;
          degree = degree + 0.3;
          console.log(degree);
        }
      })
  }, []);

  return(
    <div className='projects' ref={ProjectRef}>
      <span>
        <div>
          <img src={komma1}/>
        </div>
      </span>
      <span>
        <div>
          <img src={komma1}/>
        </div>
      </span>
      <span>
        <div>
          <img src={komma1}/>
        </div>
      </span>
    </div>
  );
}

export default Projects;
