import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import breakpoint from 'styled-components-breakpoint';
import { Theme, Coin } from '../../../constants/types';
import Card from '../../card';

interface Props {
    index: number;
    theme: Theme;
    coin: Coin;
    actions: any;
}

export class CoinCard extends React.Component<Props> {
    public openDashboard = () => {
        const {
            actions: { changeOption },
            coin,
        } = this.props;
        changeOption(coin.CoinInfo.Name);
    };

    public render() {
        const { theme, coin, index } = this.props;
        const Container = styled.div`
            height: 350px;
            margin: 10px;
            margin-left: ${index % 2 === 0 ? '15px' : '10px'};
            display: flex;
            justify-content: center;
            align-items: center;
            min-width: 350px;

            ${breakpoint('mobile')`
                width: 100%;
            `}

            ${breakpoint('tablet')`
                width: calc(50% - 25px);
            `}
        `;

        const Price = styled.p`
            font-size: 1.4rem;
            font-weight: 300;
            margin: 15px;
            color: ${theme.disabledFontColor};

            span {
                font-weight: 900;
                font-size: 2.4rem;
                color: ${theme.baseFontColor};
            }
        `;

        const CoinInfo = styled.p`
            font-size: 1.3rem;
            font-weight: 300;
            margin: 15px;
            color: ${theme.disabledFontColor};

            span {
                font-size: 1.5rem;
                font-weight: 500;
                color: ${theme.baseFontColor};
            }
        `;
        return (
            <Container>
                <Link
                    style={{ textDecoration: 'none', display: 'flex', width: '100%', height: '100%' }}
                    onClick={this.openDashboard}
                    to={'/dashboard'}
                >
                    <Card
                        theme={theme}
                        index={index + 1}
                        title={`${index + 1}. ${coin.CoinInfo.FullName}`}
                        imageUrl={`https://cryptocompare.com${coin.CoinInfo.ImageUrl}`}
                        selectable
                    >
                        <Price>
                            {`Price: `}{' '}
                            <span>{coin.DISPLAY.USD.PRICE}</span>
                        </Price>
                        <CoinInfo>
                            <span style={{ color: '#4CAF50' }}>{'▲ '}</span>
                            <span>{coin.DISPLAY.USD.HIGHDAY}</span>

                            <span style={{ color: '#D32F2F' }}>
                                {' ▼ '}
                            </span>
                            <span>{coin.DISPLAY.USD.LOWDAY}</span>
                        </CoinInfo>
                        <CoinInfo>
                            {'24H Volume: '}{' '}
                            <span>{coin.DISPLAY.USD.VOLUMEDAY}</span>
                        </CoinInfo>
                        <CoinInfo>
                            {'Market Cap: '}{' '}
                            <span>{coin.DISPLAY.USD.MKTCAP}</span>
                        </CoinInfo>
                    </Card>
                </Link>
            </Container>
        );
    }
}

export default CoinCard;
