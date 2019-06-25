import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import {Power3, TweenLite} from 'gsap';
import {Theme, News} from '../../constants/types';

interface Props {
    index: number,
    theme: Theme,
    news: News,
}

export class NewsCard extends React.Component<Props> {
    componentDidMount() {
        const target = document.querySelector(`#news_${this.props.news.id}`) as HTMLElement
        setTimeout(() => {
            TweenLite.to(target, 0, {width: '100%', ease: Power3.easeOut})
            TweenLite.to(target, 0, {height: '100%', ease: Power3.easeOut})
        }, this.props.index * 50)
    }

    openUrl = () => {
        try {
            window.open(this.props.news.url)
        } catch {
            console.log('Failed to open url')
        }
    }

    render() {
        const {theme, news} = this.props;
        const categories = news.categories.split('|');
        const categoryElements: any[] = [];
        const Container = styled.div`
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

            ${breakpoint('desktop')`
                width: calc(25% - 20px);
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
            background: ${theme.card_background};
            box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
            transition: all 0.3s cubic-bezier(.25,.8,.25,1);
            cursor: pointer;

            &:hover {
                transform: translateY(-2px);
                box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
            }
        `;

        const InfoContainer = styled.div`
            margin: 10px;
        `;
        
        const Title = styled.p`
            font-size: 1.4rem;
            color: ${theme.base_font_color};
            line-height: 1.3;
            font-weight: 300;
            display: block;
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            min-height: 120px;
            height: 120px;
            max-height: 120px;
            margin: 0px;         
        `;

        const Image = styled.div`
            width: 100%;
            height: 150px;
            min-height: 150px;
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
            background-color: #EFEFEF;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            background-image: url(${news.imageurl});
        `;

        const CategoriesContainer = styled.div`
            width: calc(100% - 20px);
            border-top: 1px solid ${theme.card_line_color};
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
        
        categories.forEach((name, index) => {
            if (index < 3) {
                categoryElements.push(
                    <Category style={{background: theme.news_category_backgrounds[Math.floor(Math.random()*theme.news_category_backgrounds.length)]}}>{name}</Category>
                )
            }
        })

        return (
            <Container>
                <Card onClick={this.openUrl} id={`news_${news.id}`}>
                    <Image />
                    <InfoContainer>
                        <Title>{news.title}</Title>
                    </InfoContainer>
                    <CategoriesContainer>
                        {categoryElements}
                    </CategoriesContainer>
                </Card>
            </Container>
        );
    }
}

export default NewsCard;
