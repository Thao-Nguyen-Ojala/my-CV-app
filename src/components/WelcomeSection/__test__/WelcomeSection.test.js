import React from 'react';
import ReactDOM from 'react-dom';
import WelcomeSection from '../WelcomeSection';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';

afterEach(cleanup)

Object.defineProperty(HTMLMediaElement.prototype, 'muted', {
  set: () =>{}
})

it('render WelcomeSection without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <WelcomeSection>WelcomeSection testing</WelcomeSection>
    , div)
})

it('matches WelcomSection snapshot', () => {
  const testingWelcomeSection = renderer.create(<WelcomeSection></WelcomeSection>).toJSON();
  expect(testingWelcomeSection).toMatchSnapshot()
})