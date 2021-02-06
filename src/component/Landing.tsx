import React, { useEffect, useRef } from 'react';

const Landing: React.FC = () => {

  useEffect(() => {
    setTimeout(() => {
      window.location.href='/main'
    }, 3000);
  }, []);

  return(
    <div className='Landing'>
      <div className='circle'></div>
      <p className='Landing-title'>TaesuFolio</p>
      <p className='Landing-desc'>F r o n t e n d  D e v e l o p e r</p>
    </div>
  );
}

export default Landing;
