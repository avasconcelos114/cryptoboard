import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { Theme } from '../../constants/types';

interface Props {
    theme: Theme;
    actions: any;
}

export class Dashboard extends React.Component<Props> {
    public componentDidMount() {
        // this.props.actions.fetchOptions()
        // this.props.actions.fetchDailyAverage()
        // this.props.actions.fetchTimechartData()
        // this.props.actions.fetchExchangeVolume()
    }

    public render() {
        const { theme } = this.props;
        const Container = styled.div`
            width: 100%;
            display: flex;
            flex-direction: column;

            ${breakpoint('mobile')`
                height: calc(100% - 60px);
            `}

            ${breakpoint('tablet')`
                height: 100%;
            `}
        `;

        const TitleContainer = styled.div`
            width: 100%;
            display: flex;
            flex-direction: row;
        `;

        const Title = styled.h1`
            margin: 50px 0px 0px 50px;
            font-size: 3rem;
            color: ${theme.baseFontColor};
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
