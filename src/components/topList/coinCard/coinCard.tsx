import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { Power3, TweenLite } from 'gsap';
import { Theme, Coin } from '../../../constants/types';

interface Props {
    index: number;
    theme: Theme;
    coin: Coin;
}

export class CoinCard extends React.Component<Props> {
    public componentDidMount() {
        const target = document.querySelector(
            `#coin_${this.props.coin.CoinInfo.Id}`,
        ) as HTMLElement;
        setTimeout(() => {
            TweenLite.to(target, 0, { width: '100%', ease: Power3.easeOut });
            TweenLite.to(target, 0, { height: '100%', ease: Power3.easeOut });
        }, this.props.index * 50);
    }

    public render() {
        const { theme, coin, index } = this.props;
        const Container = styled.div`
            height: 350px;
            margin: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            min-width: 350px;

            ${breakpoint('mobile')`
                width: 100%;
            `}

            ${breakpoint('tablet')`
                width: calc(50% - 20px);
            `}
        `;

        const Card = styled.div`
            display: flex;
            overflow: hidden;
            height: 0%;
            width: 0%;
            background: #fff;
            flex-direction: column;
            border-radius: 4px;
            background: ${theme.cardBackground};
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
                0 1px 2px rgba(0, 0, 0, 0.24);
            transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
            cursor: pointer;

            &:hover {
                transform: translateY(-2px);
                box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
                    0 10px 10px rgba(0, 0, 0, 0.22);
            }
        `;

        const CardHeader = styled.div`
            display: flex;
            flex-direction: row;
            align-items: center;
            height: 60px;
            border-bottom: 1px solid ${theme.cardLineColor};

            h3 {
                font-size: 1.5rem;
                font-weight: 300;
                display: flex;
                margin: 0 10px;
                color: ${theme.baseFontColor};
            }
        `;

        const Image = styled.img`
            width: 40px;
            height: 40px;
            margin: 10px;
            margin-left: auto;
        `;

        const CardBody = styled.div`
            display: flex;
            flex-direction: column;
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
                <Card id={`coin_${coin.CoinInfo.Id}`}>
                    <CardHeader>
                        <h3>{`${index + 1}. ${coin.CoinInfo.FullName}`}</h3>
                        <Image
                            src={`https://cryptocompare.com${coin.CoinInfo.ImageUrl}`}
                        />
                    </CardHeader>
                    <CardBody>
                        <Price>
                            {`Price: `} <span>{coin.DISPLAY.USD.PRICE}</span>
                        </Price>
                        <CoinInfo>
                            <span style={{ color: '#4CAF50' }}>{'▲ '}</span>
                            <span>{coin.DISPLAY.USD.HIGHDAY}</span>

                            <span style={{ color: '#D32F2F' }}>{' ▼ '}</span>
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
                    </CardBody>
                </Card>
            </Container>
        );
    }
}

export default CoinCard;
