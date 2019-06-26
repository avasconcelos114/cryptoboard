import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Power3, TweenLite } from 'gsap';
import breakpoint from 'styled-components-breakpoint';

import { Menu, Theme } from '../../constants/types';

interface Props {
    menus: Menu[];
    theme: Theme;
}

export class MenuList extends React.PureComponent<Props> {
    public closeMobileSidebar = () => {
        const sidebar = document.querySelector(
            '#mobile-sidebar',
        ) as HTMLElement;
        if (sidebar === null) {
            return;
        }
        TweenLite.to(sidebar, 0.8, { width: '0%', ease: Power3.easeOut });
    };

    public render() {
        const { menus, theme } = this.props;
        const menuElements: any[] = []; //TODO: figure out appropriate type for element array
        const MenuListContainer = styled.div`
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
        `;

        const MenuItem = styled.div`
            margin: 30px 15px;
            display: flex;
            align-items: center;

            a {
                text-decoration: none;
                font-size: 1.2rem;
                color: ${theme.baseFontColor};
            }

            ${breakpoint('mobile')`
                justify-content: center;
            `}

            ${breakpoint('tablet')`
                justify-content: flex-start;
            `}
        `;
        const MenuImage = styled.img`
            width: 60px;
            height: 60px;
            margin-right: 20px;
        `;

        menus.forEach(menu => {
            menuElements.push(
                <MenuItem key={menu.route}>
                    <MenuImage
                        src={`${process.env.PUBLIC_URL}/assets/img/${menu.route}_icon.png`}
                    />
                    <Link
                        onClick={this.closeMobileSidebar}
                        to={`/${menu.route}`}
                    >
                        {menu.title}
                    </Link>
                </MenuItem>,
            );
        });

        return <MenuListContainer>{menuElements}</MenuListContainer>;
    }
}

export default MenuList;
