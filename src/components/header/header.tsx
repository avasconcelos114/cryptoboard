import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import {Power3, TweenLite} from 'gsap';
import {Theme} from '../../constants/types';

interface Props {
    theme: Theme,
}

export class Header extends React.PureComponent<Props> {
    openSidebar = () => {
        const sidebar = document.querySelector('#mobile-sidebar') as HTMLElement
        if (sidebar === null) {
            return
        }
        TweenLite.to(sidebar, 0.8, {width: '100%', ease: Power3.easeOut}) 
    }

    render() {
        const {theme} = this.props;
        const HeaderContainer = styled.div`
            height: 60px;
            width: 100%;
            display: flex;
            z-index: 8;
            flex-direction: row;
            -webkit-box-shadow: 5px 18px 17px -5px ${theme.drop_shadow};
            -moz-box-shadow: 5px 18px 17px -5px ${theme.drop_shadow};
            box-shadow: 5px 18px 17px -5px ${theme.drop_shadow};

            background: ${theme.header_background};
        `;

        const HamburgerMenu = styled.button`
            z-index: 3;
            position: absolute;
    
            ${breakpoint('mobile')`
                display: flex;
            `}

            ${breakpoint('tablet')`
                display: none;
            `}
        `;

        return (
            <HeaderContainer>
                <HamburgerMenu onClick={this.openSidebar}/>
            </HeaderContainer>
        );
    }
}

export default Header;
