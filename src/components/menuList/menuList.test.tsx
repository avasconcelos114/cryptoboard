import React from 'react';
import MenuList from './menuList';
import constants from '../../constants';

import { shallow } from 'enzyme';

const setup = (props: any) => {
    const component = shallow(
        <MenuList {...props} />
    )
    return {
        component: component
    }
}

const props = {
    theme: constants.themes.light,
    menus: constants.menuItems,
}

describe('MenuList', () => {
    it('renders without crashing', () => {
        const { component } = setup(props)
        expect(component).toMatchSnapshot()
    });

    it('receives all menu items as props', () => {
        const { component } = setup(props)
        expect(component.instance().props.menus.length).toBe(3)
    })
});