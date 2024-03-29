import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import { getInputValue, getSuggestions } from '@/redux/app/selectors';
import { AppActionCreators } from '@/redux/app/app-reducer';
import { AppPropsType } from '@/types/components/app';
import { FullStateType } from '@/types/general-types';
import { AppActionType } from '@/types/redux/app-reducer';

export const PureApp: React.FunctionComponent<AppPropsType> = ({ inputValue, onInputChange, suggestions }) => (
  <div className="container">
    <div className="auto-complete">
      <h1 className="auto-complete__title">Auto Complete</h1>
      <input
        className="auto-complete__input"
        type="text"
        value={inputValue}
        onChange={e => {
          onInputChange(e.target.value);
        }}
      />
      <ul
        style={suggestions.length === 0 ? { display: 'none' } : {}}
        className="auto-complete__suggestions"
      >
        {suggestions.map(el => (
          <li key={el} className="auto-complete__suggestions-item">
            {el}
          </li>
        ))}
      </ul>
    </div>
    <div className="auto-complete__suggestions-count">{`Suggestions: ${suggestions.length}`}</div>
  </div>
);

const mapStateToProps = (state: FullStateType) => ({
  suggestions: getSuggestions(state),
  inputValue: getInputValue(state),
});

const mapDispatchToProps = (dispatch: Dispatch<AppActionType>) => ({
  onInputChange: (data: string) => {
    dispatch(AppActionCreators.changeInput(data));
    dispatch(AppActionCreators.findMatch());
  },
});

export const App = connect(mapStateToProps, mapDispatchToProps)(PureApp);
