import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { Theme, News } from '../../constants/types';
import NewsCard from './newsCard';

interface Props {
    theme: Theme;
    newsList: News[];
    actions: any;
}

export class NewsList extends React.Component<Props> {
    public componentDidMount() {
        this.props.actions.openLoadingScreen();
        this.props.actions.fetchNews();
    }

    public componentWillReceiveProps(nextProps: any) {
        if (nextProps.newsList.length > 0) {
            this.props.actions.closeLoadingScreen();
        }
    }

    public render() {
        const { theme, newsList } = this.props;
        const newsElements: any[] = [];
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
            font-size: 3rem;
            color: ${theme.baseFontColor};

            ${breakpoint('mobile')`
                margin: 20px 0px 0px 20px;
            `}

            ${breakpoint('tablet')`
                margin: 50px 0px 0px 50px;
            `}
        `;

        const NewsContainer = styled.div`
            margin: 20px 10px 0px 10px;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            height: calc(100% - 90px);
            overflow-y: auto;
            overflow-x: hidden;
        `;

        newsList.forEach((news, index) => {
            newsElements.push(
                <NewsCard index={index} theme={theme} news={news} />,
            );
        });

        return (
            <Container>
                <TitleContainer>
                    <Title>{'News'}</Title>
                </TitleContainer>
                <NewsContainer>{newsElements}</NewsContainer>
            </Container>
        );
    }
}

export default NewsList;
