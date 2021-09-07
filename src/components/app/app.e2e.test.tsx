import 'jsdom-global/register';
import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { PureApp } from './index';

configure({
  adapter: new Adapter(),
});

test('onInputChange gets correct data after input value changed', () => {
  const onInputChangeMock = jest.fn();

  const gameScreen = mount(
    <PureApp
      suggestions={[]}
      inputValue=""
      onInputChange={onInputChangeMock}
    />,
  );

  const inputEl = gameScreen.find('.auto-complete__input');

  inputEl.simulate('change', { target: { value: 'R' } });

  expect(onInputChangeMock).toHaveBeenNthCalledWith(1, 'R');
});
