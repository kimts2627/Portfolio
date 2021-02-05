// 액션
const CHANGE_CURRENT_PROJECT = 'main/CHANGE_CURRENT_PROJECT' as const;
const HANDLE_DEGREE = 'main/HANDLE_DEGREE' as const;
const HANDLE_CONTACT = 'main/HANDLE_CONTACT' as const;
const HANDLE_MOVE_PAGE = 'main/HANDLE_MOVE_PAGE' as const;

// 액션 생성 함수
export const changeCurrentProject = () => ({ type: CHANGE_CURRENT_PROJECT });
export const handleDegree = (newDegree: number) => ({
  type: HANDLE_DEGREE,
  payload: {
    newDegree
  }
});
export const handleContact = () => ({ type: HANDLE_CONTACT });
export const handleMovePage = () => ({ type: HANDLE_MOVE_PAGE });

// 액션 타입
type MainAction =
  | ReturnType<typeof changeCurrentProject> | ReturnType<typeof handleDegree>
  | ReturnType<typeof handleContact> | ReturnType<typeof handleMovePage>

// 스테이트 초기값
interface MainState {
  currentProject: string;
  degree: number;
  isContactOn: boolean;
  isMain: boolean;
}

const initialState: MainState = {
  currentProject: '',
  degree: 270,
  isContactOn: false,
  isMain: true
}

// 리듀서
const main = (state = initialState, action: MainAction) => {
  switch(action.type) {
    case CHANGE_CURRENT_PROJECT:
      return Object.assign({}, state, {
        currentProject: state.degree < 261 ? 'onemeal' : state.degree >= 261 ? 'komma' : ''
      })
    case HANDLE_DEGREE:
      return Object.assign({}, state, { degree: action.payload.newDegree })
    case HANDLE_CONTACT:
      return Object.assign({}, state, { isContactOn: !state.isContactOn })
    case HANDLE_MOVE_PAGE:
      return Object.assign({}, state, { isMain: !state.isMain })
    default:
      return state;
  }
}

export default main;
