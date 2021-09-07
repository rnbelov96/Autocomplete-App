import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { App } from './app';

const mockStore = configureStore([]);

describe('App', () => {
  test('should render initial screen', () => {
    const store = mockStore({
      app: {
        countries: ['Russian', 'USA'],
        inputValue: '',
        suggestions: [],
      },
    });
    const tree = renderer
      .create(
        <Provider store={store}>
          <App />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should render screen with results', () => {
    const store = mockStore({
      app: {
        countries: ['Russian', 'USA', 'Romania'],
        inputValue: 'R',
        suggestions: ['Russian', 'Romania'],
      },
    });
    const tree = renderer
      .create(
        <Provider store={store}>
          <App />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
