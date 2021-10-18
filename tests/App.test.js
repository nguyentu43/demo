import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../src/components/App';

configure({adapter: new Adapter()});

describe('app', () => {
  it('demo', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.text()).toBe('Hello World');
  });
});