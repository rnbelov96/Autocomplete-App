import countries from '../../data/countries';

const initialState = {
  countries,
  suggestions: [],
  inputValue: '',
};

const ActionTypes = {
  CHANGE_INPUT: 'CHANGE_INPUT',
  FIND_MATCH: 'FIND_MATCH',
};

const ActionCreators = {
  changeInput: data => ({ type: ActionTypes.CHANGE_INPUT, payload: data }),

  findMatch: () => ({ type: ActionTypes.FIND_MATCH }),
};

const reducer = (state = initialState, action) => {
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
          suggestions: state.countries.filter(el => el
            .toLowerCase()
            .startsWith(state.inputValue.toLowerCase())),
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
