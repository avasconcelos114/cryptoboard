import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import {Theme} from '../../constants/types';

interface Props {
    theme: Theme,
}

export class Dashboard extends React.Component<Props> {
    render() {
        const {theme} = this.props
        const Container = styled.div`
            height: calc(100% - 60px);
            width: 100%;
            display: flex;
            flex-direction: column;
            background: ${theme.main_background};
        `;

        const TitleContainer = styled.div`
            width: 100%;
            display: flex;
            flex-direction: row;
        `;

        const Title = styled.h1`
            margin: 50px 0px 0px 50px;
            font-size: 3rem;
        `;

        return (
            <Container>
                <TitleContainer>
                    <Title>{'Dashboard'}</Title>
                </TitleContainer>
            </Container>
        );
    }
}

export default Dashboard;
