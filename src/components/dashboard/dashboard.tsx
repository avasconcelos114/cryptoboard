import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';
import Card from '../card';
import { Theme } from '../../constants/types';

interface Props {
    theme: Theme;
    selectedOption: string;
    coinInfo: any;
    options: any;
    valueTimechart: any;
    volumeTimechart: any;
    actions: any;
}

interface State {
    priceColor: string;
    volumeColor: string;
}

export class Dashboard extends React.Component<Props, State> {
    public constructor(props: any) {
        super(props);
        this.state = {
            priceColor: this.generateColor(),
            volumeColor: this.generateColor(),
        };
    }

    public componentDidMount() {
        const {
            selectedOption,
            actions: {
                fetchOptions,
                fetchCoinInfo,
                fetchValueTimechartData,
                fetchVolumeTimechartData,
            },
        } = this.props;
        fetchOptions();
        fetchCoinInfo(selectedOption);
        fetchValueTimechartData(selectedOption);
        fetchVolumeTimechartData(selectedOption);
    }

    public componentWillReceiveProps(nextProps: any) {
        const {
            selectedOption,
            actions: {
                fetchCoinInfo,
                fetchValueTimechartData,
                fetchVolumeTimechartData,
            },
        } = this.props;

        if (selectedOption !== nextProps.selectedOption) {
            fetchCoinInfo(nextProps.selectedOption);
            fetchValueTimechartData(nextProps.selectedOption);
            fetchVolumeTimechartData(nextProps.selectedOption);
        }
    }

    public generateColor = () => {
        return this.props.theme.newsCategoryBackgrounds[
            Math.floor(
                Math.random() * this.props.theme.newsCategoryBackgrounds.length,
            )
        ];
    };

    public timeConverter = (timestamp: number) => {
        const a = new Date(timestamp * 1000);
        const months = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
        ];
        const month = months[a.getMonth()];
        const date = a.getDate();

        const time = date + ' ' + month;
        return time;
    };

    public handleOnChange = (event: any) => {
        this.props.actions.changeOption(event.target.value);
    };

    public render() {
        const {
            theme,
            selectedOption,
            coinInfo,
            options,
            valueTimechart,
            volumeTimechart,
        } = this.props;

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
            justify-content: center;
            align-items: center;
        `;

        const Title = styled.h1`
            color: ${theme.baseFontColor};
            margin-left: 20px;

            ${breakpoint('mobile')`
                font-size: 2.2rem;
            `}

            ${breakpoint('tablet')`
                font-size: 3rem;
            `}
        `;

        const Dropdown = styled.select`
            margin-left: auto;
            margin-right: 20px;
            color: ${theme.mediumFontColor};
            height: 35px;
            width: 100px;
            background: ${theme.cardBackground};
            padding: 5px;
            border: 1px solid ${theme.cardLineColor};
            border-radius: 4px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
                0 1px 2px rgba(0, 0, 0, 0.24);

            option {
                background: #fff;
                color: #000;
            }
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

            .recharts-legend-item-text {
                color: ${theme.mediumFontColor};
            }
        `;

        const ValueTag = styled.h2`
            font-weight: 500;
            margin: 0;
            display: flex;
            height: 100%;
            justify-content: center;
            align-items: center;

            ${breakpoint('mobile')`
                font-size: 10vw;
            `}

            ${breakpoint('tablet')`
                font-size: 6vw;
            `}
        `;
        
        valueTimechart.forEach((data: any) => {
            data.timestamp = this.timeConverter(data.time);
        });

        volumeTimechart.forEach((data: any) => {
            data.timestamp = this.timeConverter(data.time);
        });

        const optionsElements: any[] = [];
        optionsElements.push(
            <option value={selectedOption}>{selectedOption}</option>,
        );

        options.forEach((option: any) => {
            if (selectedOption !== option.CoinInfo.Name) {
                optionsElements.push(
                    <option value={option.CoinInfo.Name}>
                        {option.CoinInfo.Name}
                    </option>,
                );
            }
        });

        return (
            <Container>
                <TitleContainer>
                    <Title>{'Dashboard'}</Title>
                    <Dropdown onChange={e => this.handleOnChange(e)}>
                        {optionsElements}
                    </Dropdown>
                </TitleContainer>
                <DashboardContents>
                    <CardContainer>
                        <Card
                            theme={theme}
                            title={`${selectedOption} - Daily Average`}
                        >
                            <ValueTag style={{ color: this.state.priceColor }}>
                                {coinInfo.USD.PRICE}
                            </ValueTag>
                        </Card>
                    </CardContainer>

                    <CardContainer>
                        <Card
                            theme={theme}
                            title={`${selectedOption} - Exchange Volume`}
                        >
                            <ValueTag style={{ color: this.state.volumeColor }}>
                                {coinInfo.USD.VOLUME24HOUR}
                            </ValueTag>
                        </Card>
                    </CardContainer>

                    <CardContainer style={{ height: 400 }}>
                        <Card
                            theme={theme}
                            title={`${selectedOption} - Value Timechart`}
                        >
                            <ResponsiveContainer width="100%" height={300}>
                                <LineChart
                                    data={valueTimechart}
                                    margin={{
                                        top: 5,
                                        right: 20,
                                        bottom: 5,
                                        left: 0,
                                    }}
                                >
                                    <Line
                                        type="monotone"
                                        dataKey="high"
                                        stroke="#9C27B0"
                                        activeDot={{ r: 8 }}
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="open"
                                        stroke="#26C6DA"
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="low"
                                        stroke="#26A69A"
                                    />
                                    <CartesianGrid
                                        stroke={theme.mediumFontColor}
                                        strokeDasharray="5 5"
                                    />
                                    <Tooltip />
                                    <Legend />
                                    <XAxis dataKey="timestamp" />
                                    <YAxis />
                                </LineChart>
                            </ResponsiveContainer>
                        </Card>
                    </CardContainer>

                    <CardContainer style={{ height: 400 }}>
                        <Card
                            theme={theme}
                            title={`${selectedOption} - Volume Timechart`}
                        >
                            <ResponsiveContainer width="100%" height={300}>
                                <LineChart
                                    data={volumeTimechart}
                                    margin={{
                                        top: 5,
                                        right: 20,
                                        bottom: 5,
                                        left: 0,
                                    }}
                                >
                                    <Line
                                        type="monotone"
                                        dataKey="volumefrom"
                                        stroke="#26C6DA"
                                        activeDot={{ r: 8 }}
                                    />
                                    <CartesianGrid
                                        stroke={theme.mediumFontColor}
                                        strokeDasharray="5 5"
                                    />
                                    <Tooltip />
                                    <Legend />
                                    <XAxis dataKey="timestamp" />
                                    <YAxis />
                                </LineChart>
                            </ResponsiveContainer>
                        </Card>
                    </CardContainer>
                </DashboardContents>
            </Container>
        );
    }
}

export default Dashboard;
