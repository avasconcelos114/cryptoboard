import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { Theme, Coin } from '../../constants/types';
import CoinCard from './coinCard';
import Loading from '../loading';

interface Props {
    theme: Theme;
    actions: any;
    topList: Coin[];
}

interface State {
    isLoading: boolean;
}
export class TopList extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            isLoading: false,
        }
    }

    public componentDidMount() {
        this.setState({ isLoading: true });
        this.props.actions.fetchTopList();
    }

    public componentWillReceiveProps(nextProps: any) {
        if (nextProps.topList.length > 0) {
            this.setState({ isLoading: false });
        }
    }

    public render() {
        const { theme, topList } = this.props;
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
            color: ${theme.baseFontColor};

            ${breakpoint('mobile')`
                font-size: 2.2rem;
                margin: 20px 0px 0px 20px;
            `}

            ${breakpoint('tablet')`
                font-size: 3rem;
                margin: 50px 0px 0px 50px;
            `}
        `;

        const CoinContainer = styled.div`
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            height: calc(100% - 90px);
            overflow-y: scroll;
            -webkit-overflow-scrolling: touch;
        `;
        const coins: any[] = [];
        topList.forEach((coin, index) => {
            coins.push(<CoinCard key={index} coin={coin} index={index} />);
        });
        return (
            <Container>
                <TitleContainer>
                    <Title>{'Top Coins'}</Title>
                </TitleContainer>
                <CoinContainer>
                    <Loading theme={theme} id={'top_coins_loading'} isLoading={this.state.isLoading} />
                    {coins}
                </CoinContainer>
            </Container>
        );
    }
}

export default TopList;
