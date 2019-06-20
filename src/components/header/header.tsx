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
            height: 60px;
            width: 100%;
            display: flex;
            align-items: center;
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
            cursor: pointer;
            background: url(/assets/img/hamburger_icon.png);
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            width: 30px;
            height: 20px;
            margin-left: 20px;

            ${breakpoint('mobile')`
                display: flex;
            `}

            ${breakpoint('tablet')`
                display: none;
            `}
        `;

        return (
            <HeaderContainer>
                <HamburgerMenu onClick={this.toggleSidebar}/>
            </HeaderContainer>
        );
    }
}

export default Header;
