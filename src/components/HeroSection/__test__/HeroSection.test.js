import React from 'react';
import ReactDOM from 'react-dom';
import HeroSection from '../HeroSection';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

afterEach(cleanup)

it('render HeroSection without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
    <HeroSection>HeroSection testing</HeroSection>
    </Router>, div)
})

it('render HeroSection topline correctly', () => {
  const {getByTestId} = render(<HeroSection topLine={'Testing topLine'}></HeroSection>)
  expect(getByTestId('heroSection-test')).toHaveTextContent('Testing topLine')
})

it('render HeroSection headline correctly', () => {
  const {getByTestId} = render(<HeroSection headline={'Testing headline'}></HeroSection>)
  expect(getByTestId('heroSection-test')).toHaveTextContent('Testing headline')
})

it('render HeroSection description correctly', () => {
  const {getByTestId} = render(<HeroSection description={'Testing description'}></HeroSection>)
  expect(getByTestId('heroSection-test')).toHaveTextContent('Testing description')
})


it('matches HeroSection snapshot', () => {
  const testingHeroSection= renderer.create(<Router><HeroSection></HeroSection></Router>).toJSON();
  expect(testingHeroSection).toMatchSnapshot()
})