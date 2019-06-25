import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import MenuList from '../menuList';
import {Theme} from '../../constants/types';

interface Props {
    theme: Theme,
    actions: any,
}

export class Sidebar extends React.PureComponent<Props> {

    toggleTheme = (theme: string) => {
        this.props.actions.toggleTheme(theme)
    }

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

            box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

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
            height: calc(100% - 60px);
            width: 100%;
            margin-top: 60px;
            position: absolute;
            overflow: hidden;
            display: none;
            z-index: 8;

            ${breakpoint('mobile')`
                display: flex;
                flex-direction: column;
                z-index: 6;
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
            color: ${theme.base_font_color};
        `;

        const SidebarSubtitle = styled.h3`
            font-size: 1rem;
            margin: 20px 20px 0px 20px;
            color: ${theme.medium_font_color};
        `;

        const ThemeButtonContainer = styled.div`
            height: 60px;
            width: 100%;
            display: flex;
            margin: 0 10px;
        `;

        const ThemeButton = styled.button`
            font-weight: 500;
            border: 1px solid rgba(0, 0, 0, 0.05);
            height: 40px;
            width: calc(50% - 10px);
            box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
            cursor: pointer;
        `;
        
        return (
            <SidebarContainer>
                
                <Sidebar id="sidebar">
                    <SidebarTitle>{'Cryptoboard'}</SidebarTitle>
                    <SidebarSubtitle>{'MENUS'}</SidebarSubtitle>
                    <MenuList />
                    <ThemeButtonContainer>
                        <ThemeButton
                            style={{
                                borderTopLeftRadius: 4,
                                borderBottomLeftRadius: 4,
                                background: '#FAFAFA',
                                color: 'rgba(0, 0, 0, 0.87)',
                            }}
                            onClick={() => this.toggleTheme('light')}
                        >
                            {'Light'}
                        </ThemeButton>
                        <ThemeButton
                            style={{
                                borderTopRightRadius: 4,
                                borderBottomRightRadius: 4,
                                background: '#121212',
                                color: 'rgba(255, 255, 255, 0.87)'
                            }}
                            onClick={() => this.toggleTheme('dark')}
                        >
                            {'Dark'}
                        </ThemeButton>
                    </ThemeButtonContainer>
                </Sidebar>
                <MobileSidebar id="mobile-sidebar"> 
                    <MenuList />
                </MobileSidebar>
            </SidebarContainer>
        );
    }
}

export default Sidebar;
