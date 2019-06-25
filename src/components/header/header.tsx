import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import {Power3, TweenLite} from 'gsap';
import {Theme} from '../../constants/types';

interface Props {
    theme: Theme,
}

interface State {
    isMenuOpen: boolean,
}
export class Header extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);

        this.state = {
            isMenuOpen: false,
        };
    }

    toggleSidebar = () => {
        const sidebar = document.querySelector('#mobile-sidebar') as HTMLElement
        if (sidebar === null) {
            return
        }
        if (this.state.isMenuOpen) {
            this.setState({isMenuOpen: false})
            TweenLite.to(sidebar, 0.8, {width: '0%', ease: Power3.easeOut})
        } else {
            this.setState({isMenuOpen: true})
            TweenLite.to(sidebar, 0.8, {width: '100%', ease: Power3.easeOut})
        }
    }

    render() {
        const {theme} = this.props;
        const HeaderContainer = styled.div`
            width: 100%;
            display: flex;
            align-items: center;
            z-index: 7;
            flex-direction: row;
            
            ${breakpoint('mobile')`
                height: 60px;
                background: ${theme.header_background};
                box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
            `}
                
            ${breakpoint('tablet')`
                height: 0px;
                background: ${theme.main_background};
                box-shadow: none;
            `}
        `;

        const HeaderTitle = styled.h2`
            height: 60px;
            margin: 0px 20px;
            align-items: center;

            ${breakpoint('mobile')`
                display: flex;
            `}
                
            ${breakpoint('tablet')`
                display: none;
            `}
        `;

        const HamburgerMenu = styled.button`
            z-index: 3;
            position: absolute;
            right: 0;
            cursor: pointer;
            background: url(${process.env.PUBLIC_URL}/assets/img/hamburger_icon.png);
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            width: 30px;
            height: 20px;
            margin-right: 20px;

            ${breakpoint('mobile')`
                display: flex;
            `}

            ${breakpoint('tablet')`
                display: none;
            `}
        `;

        return (
            <HeaderContainer>
                <HeaderTitle>{'Cryptoboard'}</HeaderTitle>
                <HamburgerMenu onClick={this.toggleSidebar}/>
            </HeaderContainer>
        );
    }
}

export default Header;
