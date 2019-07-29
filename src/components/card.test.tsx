import React from 'react';
import Card from './card';
import constants from '../constants';

import {shallow} from 'enzyme';

const setup = (props: any) => {
    const component = shallow(
        <Card {...props} />
    )
    return {
        component: component
    }
}

const props = {
    theme: constants.themes.light,
    title: 'Test card',
    children: (<p>{'Test child'}</p>)
}

describe('Card', () => {
    it('renders without crashing', () => {
        setup(props)
    });
    
    it('should render the received title', () => {
        const {component} = setup(props)
        expect(component.instance().props.title).toBe('Test card')
    });
    
    it('should render child components', () => {
        const { component } = setup(props)
        expect(component.instance().props.children).toEqual(<p>{'Test child'}</p>)
    });
    
    it('should contain an image component in card', () => {
        const imageUrl = 'https://static.coindesk.com/wp-content/uploads/2018/11/Bitcoins-860x430.jpg';
        const newProps = { ...props, imageUrl}
        const { component } = setup(newProps)

        expect(component.instance().props.imageUrl).toBe(imageUrl)
    });
});