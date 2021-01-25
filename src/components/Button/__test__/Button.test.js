import React from 'react';
import ReactDOM from 'react-dom'
import Button from '../Button'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer'

afterEach(cleanup)

it('render Button without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button>Button Testing</Button>, div)
})

it('render button correctly', () => {
  const {getByTestId} = render(<Button>INTRODUCTION</Button>)
  expect(getByTestId('button')).toHaveTextContent('INTRODUCTION')
})

it('matches Button snapshot', () => {
  const testingButton = renderer.create(<Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'  buttonColor='blue'u>Testing</Button>).toJSON();
  expect(testingButton).toMatchSnapshot()
})



