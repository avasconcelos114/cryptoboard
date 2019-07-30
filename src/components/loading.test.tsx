import React from 'react';
import Loading from './loading';
import constants from '../constants';

import { shallow } from 'enzyme';

const props = {
    theme: constants.themes.light,
    isLoading: false,
    id: 'test_loading_component'
}

const setup = (props: any) => {
    const component = shallow(
        <Loading {...props} />
    )
    return {
        component: component
    }
}

describe('Loading', () => {
    it('renders without crashing', () => {
        const { component } = setup(props)
        expect(component).toMatchSnapshot()
    });
    
    it('should return a null component when isLoading is false', () => {
        const {component} = setup(props)
        expect(component.html()).toBeNull()
    });
    
    it('should render loading component when isLoading is true', () => {
        const newProps = {...props, isLoading: true}
        const { component } = setup(newProps)
        expect(component.html()).not.toBeNull()
    });
})
