import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import MenuList from '../menuList';
import {Theme} from '../../constants/types';

interface Props {
    theme: Theme
}

export class Sidebar extends React.PureComponent<Props> {

    render() {
        const {theme} = this.props;
        const SidebarContainer = styled.div`
            height: 100%;
            display: flex;
        `;

        const Sidebar = styled.div`
            background: ${theme.sidebar_background};
            height: 100%;
            position: relative;
            z-index: 8;
            width: 270px;

            -webkit-box-shadow: 17px 7px 17px -5px ${theme.drop_shadow};
            -moz-box-shadow: 17px 7px 17px -5px ${theme.drop_shadow};
            box-shadow: 17px 7px 17px -5px ${theme.drop_shadow};

            ${breakpoint('mobile')`
                display: none;
            `}

            ${breakpoint('tablet')`
                display: flex;
                flex-direction: column;
            `}
        `;

        const MobileSidebar = styled.div`
            background: ${theme.sidebar_background};
            height: calc(100% - 80px);
            width: 100%;
            padding-top: 80px;
            position: absolute;
            overflow: hidden;
            display: none;
            z-index: 8;

            ${breakpoint('mobile')`
                display: flex;
                flex-direction: column;
                width: 0px;
            `}

            ${breakpoint('tablet')`
                display: none;
                width: 0px;
            `}
        `;

        const SidebarTitle = styled.h2`
            display: flex;
            height: 68px;
            margin: 0px 20px;
            align-items: center;
        `;

        const SidebarSubtitle = styled.h3`
            font-size: 1rem;
            margin: 20px 20px 0px 20px;
        `;

        return (
            <SidebarContainer>
                
                <Sidebar id="sidebar">
                    <SidebarTitle>{'Cryptoboard'}</SidebarTitle>
                    <SidebarSubtitle>{'MENUS'}</SidebarSubtitle>
                    <MenuList />
                </Sidebar>
                <MobileSidebar id="mobile-sidebar"> 
                    <MenuList />
                </MobileSidebar>
            </SidebarContainer>
        );
    }
}

export default Sidebar;
