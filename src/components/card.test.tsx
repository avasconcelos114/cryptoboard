import React from 'react';
import ReactDOM from 'react-dom';
import Card from './card';
import constants from '../constants';

const props = {
    theme: constants.themes.light,
    title: 'Test card',
    children: <p>{'Test child'}</p>
}

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('should render the received title', () => {

});

it('should render child components', () => {

});

it('should contain an image component in card', () => {

});

it('should should trigger animation on componentDidMount', () => {

});