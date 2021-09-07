import {
  AppActionConstType,
  AppActionType,
  AppInitialStateType,
  ChangeInputActionType,
  FindMatchActionType,
} from '@/types/redux/app-reducer';
import countries from '../../data/countries';

const initialState: AppInitialStateType = {
  countries,
  suggestions: [],
  inputValue: '',
};

const ActionTypes: AppActionConstType = {
  CHANGE_INPUT: 'CHANGE_INPUT',
  FIND_MATCH: 'FIND_MATCH',
};

const ActionCreators = {
  changeInput: (data: string): ChangeInputActionType => ({
    type: ActionTypes.CHANGE_INPUT,
    payload: data,
  }),

  findMatch: (): FindMatchActionType => ({ type: ActionTypes.FIND_MATCH }),
};

const reducer = (
  state: AppInitialStateType = initialState,
  action: AppActionType,
) => {
  switch (action.type) {
    case ActionTypes.CHANGE_INPUT:
      return {
        ...state,
        inputValue: action.payload,
      };

    case ActionTypes.FIND_MATCH:
      return state.inputValue === ''
        ? { ...state, suggestions: [] }
        : {
          ...state,
          suggestions: state.countries.filter(el => el.toLowerCase().startsWith(state.inputValue.toLowerCase())),
        };
    default:
      return state;
  }
};

export {
  reducer as appReducer,
  ActionCreators as AppActionCreators,
  ActionTypes as AppActionTypes,
};
