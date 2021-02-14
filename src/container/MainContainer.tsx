import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Main from '../component/Main';
import { RootState } from '../modules';
import {
  handleDegree,
  changeCurrentProject,
  handleContact,
  handleMovePage,
  handleWidth
} from '../modules/main';

const MainComponent: React.FC = () => {

  const degree = useSelector((state: RootState) => state.main.degree);
  const isContactOn = useSelector((state: RootState) => state.main.isContactOn);
  const currentProject = useSelector((state: RootState) => state.main.currentProject);
  const isMain = useSelector((state: RootState) => state.main.isMain);
  const width = useSelector((state: RootState) => state.main.width);

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

  const handlingMovePage = () => {
    dispatch(handleMovePage());
  }

  const handlingWidth = (width: number) => {
    dispatch(handleWidth(width));
  }

  return(
    <Main
      width={width}
      degree={degree}
      isContactOn={isContactOn}
      isMain={isMain}
      currentProject={currentProject}
      handleDegree={handlingDegree}
      changeCurrentProject={changingCurrentProject}
      handleContact={handlingContact}
      handleMovePage={handlingMovePage}
      handleWidth={handlingWidth}
    />
  );
}

export default MainComponent;
