import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeInput, findMatch } from '../redux/actions/actions';

function AutoComplete({ inputValue, onChange, suggestions }) {
  return (
    <>
      <div className="auto-complete">
        <h1 className="auto-complete__title">Auto Complete</h1>
        <input
          className="auto-complete__input"
          type="text"
          value={inputValue}
          onChange={e => {
            onChange(e.target.value);
          }}
        />
        <ul
          style={suggestions.length === 0 ? { display: 'none' } : {}}
          className="auto-complete__suggestions"
        >
          {suggestions.map((el, index) => (
            <li key={index} className="auto-complete__suggestions-item">
              {el}
            </li>
          ))}
        </ul>
      </div>
      <div className="auto-complete__suggestions-count">{`Suggestions: ${suggestions.length}`}</div>
    </>
  );
}

AutoComplete.propTypes = {
  // countries: PropTypes.arrayOf(PropTypes.string).isRequired,
  inputValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  suggestions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function mapStateToProps(state) {
  return {
    // countries: state.appState.countries,
    suggestions: state.appState.suggestions,
    inputValue: state.appState.inputValue,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChange: data => {
      dispatch(changeInput(data));
      dispatch(findMatch());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AutoComplete);
