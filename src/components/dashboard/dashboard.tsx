import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

import { Theme } from '../../constants/types';

interface Props {
    theme: Theme;
    selectedOption: string;
    coinInfo: any;
    timechartData: any;
    actions: any;
}

export class Dashboard extends React.Component<Props> {
    public componentDidMount() {
        const {selectedOption, actions: {fetchOptions, fetchCoinInfo, fetchTimechartData}} = this.props
        fetchOptions()
        fetchCoinInfo(selectedOption)
        fetchTimechartData(selectedOption)
    }

    public timeConverter = (timestamp: number) => {
            const a = new Date(timestamp * 1000);
            const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
            const month = months[a.getMonth()];
            const date = a.getDate();

            const time = date + ' ' + month;
            return time;
    }

    public render() {
        const { theme, selectedOption, coinInfo, timechartData } = this.props;
        console.log(coinInfo)
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

        const DashboardContents = styled.div`
            margin: 20px 10px 0px 10px;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            height: calc(100% - 90px);
            overflow-y: auto;
            overflow-x: hidden;
            align-content: baseline;
        `;

        const CardContainer = styled.div`
            height: 350px;
            margin: 10px;
            display: flex;
            justify-content: center;
            align-items: center;

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
            height: 100%;
            width: 100%;
            background: #fff;
            flex-direction: column;
            border-radius: 4px;
            background: ${theme.cardBackground};
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
                0 1px 2px rgba(0, 0, 0, 0.24);
            transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
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

        const CardBody = styled.div`
            display: flex;
            height: 100%;
            width: 100%;
            justify-content: center;
            align-items: center;

            h2 {
                font-size: 5rem;
                font-weight: 500;
                color: ${theme.newsCategoryBackgrounds[Math.floor(Math.random() * theme.newsCategoryBackgrounds.length)]}

                ${breakpoint('mobile')`
                    font-size: 5rem;
                `}

                ${breakpoint('tablet')`
                    font-size: 3rem;
                `}

                ${breakpoint('desktop')`
                    font-size: 5rem;
                `}
            }
        `;
        
        timechartData.forEach((data: any) => {
            data.timestamp = this.timeConverter(data.time)
        })

        return (
            <Container>
                <TitleContainer>
                    <Title>{'Dashboard'}</Title>
                </TitleContainer>
                <DashboardContents>
                    <CardContainer>
                        <Card>
                            <CardHeader>
                                <h3>{`${selectedOption} - Daily Average`}</h3>
                            </CardHeader>
                            <CardBody>
                                <h2>{coinInfo.USD.PRICE}</h2>
                            </CardBody>
                        </Card>
                    </CardContainer>
                    <CardContainer>
                        <Card>
                            <CardHeader>
                                <h3>{`${selectedOption} - Exchange Volume`}</h3>
                            </CardHeader>
                            <CardBody>
                                <h2>{coinInfo.USD.VOLUMEDAY}</h2>
                            </CardBody>
                        </Card>
                    </CardContainer>
                    <CardContainer style={{height: 400}}>
                        <Card>
                            <CardHeader>
                                <h3>{`${selectedOption} - Value Timechart`}</h3>
                            </CardHeader>
                            <CardBody>
                                <LineChart width={600} height={300} data={timechartData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                                    <Line type="monotone" dataKey="open" stroke="#26C6DA" activeDot={{ r: 8 }} />
                                    <Line type="monotone" dataKey="low" stroke="#26A69A" />
                                    <Line type="monotone" dataKey="high" stroke="#9C27B0" />
                                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                                    <Tooltip />
                                    <Legend />
                                    <XAxis dataKey="timestamp" />
                                    <YAxis />
                                </LineChart>
                            </CardBody>
                        </Card>
                    </CardContainer>
                </DashboardContents>
            </Container>
        );
    }
}

export default Dashboard;
