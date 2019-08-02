import React from 'react';
import Header from './header';
import constants from '../../constants';

import { shallow } from 'enzyme';

const setup = (props: any) => {
    const component = shallow(
        <Header {...props} />
    )
    return {
        component: component
    }
}

const props = {
    theme: constants.themes.light,
}

describe('Header', () => {
    it('renders without crashing', () => {
        const { component } = setup(props)
        expect(component).toMatchSnapshot()
    });

    it('should initialize with isMenuOpen set to false', () => {
        const { component } = setup(props)
        expect(component.instance().state.isMenuOpen).toBe(false)
    });
});