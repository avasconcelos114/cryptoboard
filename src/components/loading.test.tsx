import React from 'react';
import ReactDOM from 'react-dom';
import Loading from './loading';
import constants from '../constants';

const props = {
    theme: constants.themes.light,
    isLoading: false,
    id: 'test_loading_component'
}

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Loading {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('should return a null component when isLoading is false', () => {

});

it('should render loading component when isLoading is true', () => {

});

it('should render zdog animation', () => {

});