import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';

describe.skip('15 - Crie um componente `<App />`', () => {
  let wrapper;
  it('Renderize `<Header />` dentro do componente `<App />`', () => {
    wrapper = shallow(<App />);
    expect(wrapper.find('Header').length).toEqual(1);
  });
});

describe.skip('16 - Renderize `<MovieList />` dentro do componente `<App />`', () => {
  let wrapper;
  it('Renderize `<MovieList />` dentro do componente `<App />`', () => {
    wrapper = shallow(<App />);
    expect(wrapper.find('MovieList').length).toEqual(1);
  });
});
