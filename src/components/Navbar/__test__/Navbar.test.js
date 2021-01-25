import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from '../NavBar';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

afterEach(cleanup)

it('render NavBar without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
    <NavBar>NavBar Testing</NavBar>
    </Router>, div)
})

it('matches NavBar snapshot', () => {
  const testingNavBar = renderer.create(<Router><NavBar></NavBar></Router>).toJSON();
  expect(testingNavBar).toMatchSnapshot()
})