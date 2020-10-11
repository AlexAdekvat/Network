import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import JsApp from './App';
import ReactDOM from 'react-dom'


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<JsApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
