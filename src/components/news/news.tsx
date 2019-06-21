import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import {Theme, News} from '../../constants/types';

interface Props {
    theme: Theme,
    newsList: News[],
    actions: any,
}

export class NewsPage extends React.Component<Props> {

    componentDidMount() { 
        this.props.actions.fetchNews()
    }

    render() {
        const {theme, newsList} = this.props;
        const newsElements: any[] = [];
        const Container = styled.div`
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
        `;

        const Title = styled.h1`
            margin: 50px 0px 0px 50px;
            font-size: 3rem;
        `;

        newsList.forEach((news) => {
            newsElements.push(
                <div>{news.title}</div>
            )
        })

        console.log(this.props.newsList)
        return (
            <Container>
                <Title>{'News'}</Title>
                {newsElements}
            </Container>
        );
    }
}

export default NewsPage;
