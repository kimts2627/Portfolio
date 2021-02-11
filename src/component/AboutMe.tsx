import React, { useEffect, useRef } from 'react';
import Header from './Header';
import Footer from './Footer';
import arrow from '../img/arrow.png';

interface AboutMeProps {
  isMain: boolean;
  isContactOn: boolean;
  currentProject: string;
  handleContact: () => void;
  handleMovePage: () => void;
}

const AboutMe: React.FC<AboutMeProps> = ({
  isMain,
  isContactOn,
  currentProject,
  handleContact,
  handleMovePage
}) => {

  // 스크롤 
  const titleRef: any = useRef();
  const middleRef: any = useRef();
  const descRef: any = useRef();
  const footerRef: any = useRef();

  useEffect(() => {
    let position: number = 0;
    window.addEventListener('mousewheel', (delta: any) => {
      if(delta.wheelDelta >= 3) {
        if(position >= 0) {
          return;
        }
        titleRef.current.style.transform = `translateY(${position}px)`;
        middleRef.current.style.transform = `translateY(${position}px)`;
        descRef.current.style.transform = `translateY(${position}px)`;
        footerRef.current.style.transform = `translateY(${position}px)`;
        position = position + 15;
      }
      else if(delta.wheelDelta <= -3) {
        if(position <= -750) {
          return;
        }
        titleRef.current.style.transform = `translateY(${position}px)`;
        middleRef.current.style.transform = `translateY(${position}px)`;
        descRef.current.style.transform = `translateY(${position}px)`;
        footerRef.current.style.transform = `translateY(${position}px)`;
        position = position - 15;
      }
    })
  }, []);

  // 터치 스크롤 이벤트 
  let aobutMeRef: any = useRef();

  useEffect(() => {
    let yLocation: number;
    let isTouched: boolean = false;
    //* 터치 시작
    aobutMeRef.current.addEventListener('touchstart', (e: any) => {
      isTouched = true;
      yLocation = e.touches[0].clientY;
      console.log(yLocation);
    }, false);
    //* 터치 무브
    aobutMeRef.current.addEventListener('touchmove', (e: any) => {
      if(isTouched) {
        e.preventDefault();
        let movedYLocation: number = (e.touches[0].clientY - yLocation);
        console.log(movedYLocation);
        titleRef.current.style.transform = `translateY(${movedYLocation}px)`;
        middleRef.current.style.transform = `translateY(${movedYLocation}px)`;
        descRef.current.style.transform = `translateY(${movedYLocation}px)`;
        footerRef.current.style.transform = `translateY(${movedYLocation}px)`;
      }
    }, { passive: false });
    //* 터치 종료
    aobutMeRef.current.addEventListener('touchend', (e: any) => {
      isTouched = false;
    });
  }, []);

  // 메인페이지로 돌아가는 함수
  const returnToMain = () => {
    window.location.href = '/main'
  }

  return(
    <main className='AboutMe' ref={aobutMeRef}>
      <Header isMain={isMain} handleMovePage={handleMovePage}/>
      <section className='title' ref={titleRef}>
        <p>
          <div className='one'>상상을 </div>
          <div className='two'>현실로 구현하는,</div>
        </p>
        <p className='three'>감각있는</p>
        <p>
          <div className='four'>주니어 </div>
          <div className='five'>프론트엔드 <div className='five-one'>개발자</div> 입니다</div>
          <div className='six'>.</div>
        </p>
      </section>
      <section className='middle' ref={middleRef}>
        <p>
          React, Javascript 에 기반한 웹 프론트엔드 개발자 김태수 입니다.
        </p>
        <p>
          디자인과 풀스택 개발에 대한 배경을 바탕으로
        </p>
        <p>
          디자이너와 백엔드 개발자와의 협업과 소통에 강점이 있으며
        </p>
        <p>
          이를 기반으로 디자인과 UX 친화적 개발을 지향하고 있습니다.      
        </p>
        <span/>
      </section>
      <section className='description' ref={descRef}>
        <img src={arrow} alt='' onClick={returnToMain} />
        <div>React, Javascript 기반의 전반적인 프론트엔드 개발 능력과</div>
        <div>리덕스를 이용한 상태관리</div>
        <div>그리고 Typescript를 이용한 정적 타이핑</div>
        <div>Sass를 사용하여 사용자 경험을 중점으로</div>
        <div>UI를 디자인한 경험이 있습니다.</div>
        <div className='server'>Node.js 및 Express를 기반으로 한 서버 구현이 가능하고,</div>
        <div>Mysql을 사용하여 sqlDB를 다룰 수 있습니다.</div>
        <div className='etc'>Git과 Slack을 사용하여 협업과 소통을 진행한 경험이 있으며,</div>
        <div>Figma및 Miro를 사용하여</div>
        <div>Wireframe 설계 및 프로토타입 제작을할 수 있습니다.</div>
      </section>
      <section className='footer' ref={footerRef}>
        <div>Copyright 2021. Kim Taesu all rights reserved.</div>
      </section>
      <Footer
        isContactOn={isContactOn}
        currentProject={currentProject}
        handleContact={handleContact}
        isMain={isMain}
        handleMovePage={handleMovePage}
      />
    </main>
  );
}

export default AboutMe;
