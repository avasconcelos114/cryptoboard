import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import {Theme, Coin} from '../../constants/types';
import CoinCard from './coinCard';
interface Props {
    theme: Theme,
    actions: any,
    topList: Coin[],
}

export class TopList extends React.Component<Props> {
    componentDidMount() {
        this.props.actions.openLoadingScreen()
        this.props.actions.fetchTopList()
    }

    componentWillReceiveProps(nextProps: any) {
        if (nextProps.topList.length > 0) {
            this.props.actions.closeLoadingScreen()
        }
    }

    render() {
        const {theme, topList} = this.props
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
            color: ${theme.base_font_color};
        `;

        const CoinContainer = styled.div`
            margin: 20px 10px 0px 10px;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            height: calc(100% - 90px);
            overflow: auto;
        `;
        const coins: any[] = []
        topList.forEach((coin, index) => {
            coins.push(
                <CoinCard key={index} coin={coin} index={index}/>
            )
        })
        return (
            <Container>
                <TitleContainer>
                    <Title>{'Top Coins'}</Title>
                </TitleContainer>
                <CoinContainer>
                    {coins}
                </CoinContainer>
            </Container>
        );
    }
}

export default TopList;
