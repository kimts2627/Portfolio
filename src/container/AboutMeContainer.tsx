import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AboutMe from '../component/AboutMe';
import { RootState } from '../modules';
import { handleContact, handleMovePage } from '../modules/main';

const AboutMeComponent: React.FC = () => {

  const isContactOn = useSelector((state: RootState) => state.main.isContactOn);
  const currentProject = useSelector((state: RootState) => state.main.currentProject);
  const isMain = useSelector((state: RootState) => state.main.isMain);

  const dispatch = useDispatch();

  const handlingContact = () => {
    dispatch(handleContact());
  }

  const handlingMovePage = () => {
    dispatch(handleMovePage());
  }

  return(
    <AboutMe
      isMain={isMain}
      isContactOn={isContactOn}
      currentProject={currentProject}
      handleContact={handlingContact}
      handleMovePage={handlingMovePage}
    />
  );
}

export default AboutMeComponent;
