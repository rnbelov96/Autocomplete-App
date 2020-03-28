import countries from '../../data/countries';
import { CHANGEINPUT, FINDMATCH } from '../actions/actionsTypes';

const initialState = {
  countries,
  suggestions: [],
  inputValue: '',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CHANGEINPUT:
      return {
        ...state,
        inputValue: action.payload,
      };

    case FINDMATCH:
      return state.inputValue === ''
        ? { ...state, suggestions: [] }
        : {
            ...state,
            suggestions: state.countries.filter(el => {
              return el
                .toLowerCase()
                .startsWith(state.inputValue.toLowerCase());
            }),
          };
    default:
      return state;
  }
}
