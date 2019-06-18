import React from 'react';
import styled from 'styled-components';
import Constants from '../constants';

const activeTheme = 'dark'
const theme = Constants.themes[activeTheme]

export class Sidebar extends React.Component {
    render() {
        const SidebarContainer = styled.div`
            height: 100%;
            width: 400px;
            display: flex;
            background: ${theme.sidebar_color};
        `;

        return (
            <SidebarContainer />
        );
    }
}

export default Sidebar;
