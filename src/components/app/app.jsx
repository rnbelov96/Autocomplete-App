import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getInputValue, getSuggestions } from '@/reducer/app/selectors';
import { AppActionCreators } from '@/reducer/app/app';

const AutoComplete = ({ inputValue, onChange, suggestions }) => (
  <div className="container">
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

AutoComplete.propTypes = {
  inputValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  suggestions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = state => ({
  suggestions: getSuggestions(state),
  inputValue: getInputValue(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: data => {
    dispatch(AppActionCreators.changeInput(data));
    dispatch(AppActionCreators.findMatch());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AutoComplete);
