import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { List, AutoSizer } from 'react-virtualized';
import { Theme, News } from '../../constants/types';

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

    public openUrl = (url: string) => {
        try {
            window.open(url);
        } catch {
            console.log('Failed to open url');
        }
    };

    // @ts-ignore
    public renderCard = ({ index, key, style }) => {
        const { theme, newsList } = this.props;
        const item = newsList[index];
        const categories = item.categories.split('|');

        const Container = styled.div`
            display: flex;
            justify-content: center;
            align-items: center;
        `;

        const Card = styled.div`
            display: flex;
            overflow: hidden;
            width: calc(100% - 20px);
            height: calc(100% - 20px);
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

        const InfoContainer = styled.div`
            margin: 10px;
        `;

        const Title = styled.p`
            font-size: 1.4rem;
            color: ${theme.baseFontColor};
            line-height: 1.3;
            font-weight: 300;
            display: block;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            min-height: 60px;
            height: 60px;
            max-height: 60px;
            margin: 0px;
        `;

        const Subtitle = styled.p`
            font-size: 1.2rem;
            color: ${theme.disabledFontColor};
            font-weight: 300;
            line-height: 1.3;
            display: block;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            min-height: 50px;
            height: 50px;
            max-height: 50px;
            margin: 0px 0px 10px 0px;
        `;

        const Image = styled.div`
            width: 100%;
            height: 150px;
            min-height: 150px;
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
            background-color: #efefef;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            background-image: url(${item.imageurl});
        `;

        const CategoriesContainer = styled.div`
            width: calc(100% - 20px);
            border-top: 1px solid ${theme.cardLineColor};
            padding: 10px;
            display: flex;
            flex-direction: row;
            height: 60px;
        `;

        const Category = styled.div`
            height: 30px;
            margin-right: 10px;
            color: #fff;
            display: inline-block;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 5px;
            border-radius: 4px;
        `;

        const categoryElements: any[] = [];
        categories.forEach((name: string, idx: number) => {
            if (idx < 3) {
                categoryElements.push(
                    <Category
                        style={{
                            background: theme.newsCategoryBackgrounds[idx],
                        }}
                    >
                        {name}
                    </Category>,
                );
            }
        });

        return (
            <Container key={key} style={style}>
                <Card
                    onClick={() => this.openUrl(item.url)}
                    id={`news_${item.id}`}
                >
                    <Image />
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Subtitle>{item.body}</Subtitle>
                    </InfoContainer>
                    <CategoriesContainer>
                        {categoryElements}
                    </CategoriesContainer>
                </Card>
            </Container>
        );
    };

    public render() {
        const { theme, newsList } = this.props;
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

        const NewsContainer = styled.div`
            margin: 20px 10px 0px 10px;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            height: calc(100% - 90px);
            overflow-y: auto;
            overflow-x: hidden;
        `;

        return (
            <Container>
                <TitleContainer>
                    <Title>{'News'}</Title>
                </TitleContainer>
                <NewsContainer>
                    <AutoSizer>
                        {// @ts-ignore
                        ({ height, width }) => (
                            <List
                                height={height}
                                rowCount={newsList.length}
                                rowHeight={370}
                                rowRenderer={this.renderCard}
                                width={width}
                                style={{ outline: 'none' }}
                            />
                        )}
                    </AutoSizer>
                </NewsContainer>
            </Container>
        );
    }
}

export default NewsList;
