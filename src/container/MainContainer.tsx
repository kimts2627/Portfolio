import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Main from '../component/Main';
import { RootState } from '../modules';
import { handleDegree, changeCurrentProject, handleContact } from '../modules/main';

const MainComponent: React.FC = () => {

  const degree = useSelector((state: RootState) => state.main.degree);
  const isContactOn = useSelector((state: RootState) => state.main.isContactOn);
  const currentProject = useSelector((state: RootState) => state.main.currentProject);

  const dispatch = useDispatch();

  const handlingDegree = (newDegree: number) => {
    dispatch(handleDegree(newDegree));
  }

  const changingCurrentProject = () => {
    dispatch(changeCurrentProject());
  }

  const handlingContact = () => {
    dispatch(handleContact());
  }

  return(
    <Main
      degree={degree}
      isContactOn={isContactOn}
      currentProject={currentProject}
      handleDegree={handlingDegree}
      changeCurrentProject={changingCurrentProject}
      handleContact={handlingContact}
    />
  );
}

export default MainComponent;
