import React from 'react';
import ReactDOM from 'react-dom';
import LinkButton from '../LinkButton';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';


it('render LinkButton without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
    <LinkButton>Link Button Testing</LinkButton>
    </Router>, div)
})

it('matches LinkButton snapshot', () => {
  const testingLinkButton = renderer.create(<Router><LinkButton className='btns' buttonStyle='btn--outline' buttonSize='btn--large'  buttonColor='red' directTo='testing'>Testing</LinkButton></Router>).toJSON();
  expect(testingLinkButton).toMatchSnapshot()
})