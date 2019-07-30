import React from 'react';
import App from './App';

import { shallow } from 'enzyme';

const setup = () => {
    const component = shallow(
        <App />
    )
    return {
        component: component
    }
}

describe('App', () => {
    it('renders without crashing', () => {
        const { component } = setup()
        expect(component).toMatchSnapshot()
    });
})
