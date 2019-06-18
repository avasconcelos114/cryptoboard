import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Constants from '../constants';

const activeTheme = 'dark'
const theme = Constants.themes[activeTheme]

export class Sidebar extends React.Component {

    openSidebar = () => {
        const sidebar = document.querySelector('#sidebar') as HTMLElement
        if (sidebar === null) {
            return
        }
        sidebar.style.width = `${window.innerWidth}px`;
    }

    render() {
        const SidebarContainer = styled.div`
            height: 100%;
            display: flex;
        `;

        const HamburgerMenu = styled.button`
            z-index: 3;
            position: absolute;
        `;

        const Sidebar = styled.div`
            background: ${theme.sidebar_color};
            height: 100%;
            display: flex;
            position: relative;
            z-index: 8;

            ${breakpoint('tablet')`
                width: 270px;
            `}

            ${breakpoint('mobile')`
                width: 0px;
            `}
        `;

        return (
            <SidebarContainer>
                <HamburgerMenu onClick={this.openSidebar}/>
                <Sidebar id="sidebar" />
            </SidebarContainer>
        );
    }
}

export default Sidebar;
