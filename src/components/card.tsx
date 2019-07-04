import React, { createRef } from 'react';
import styled from 'styled-components';
import { Power3, TweenLite } from 'gsap';
import { Theme } from '../constants/types';

interface Props {
    theme: Theme;
    title: string;
    imageUrl?: string;
    index?: number;
    selectable?: boolean;
}

export class Card extends React.Component<Props> {
    public cardRef = createRef<HTMLDivElement>();

    public componentDidMount() {
        if (this.props.index) {
            const target = this.cardRef.current;
            setTimeout(() => {
                TweenLite.to(target, 0, { width: '100%', ease: Power3.easeOut });
                TweenLite.to(target, 0, { height: '100%', ease: Power3.easeOut });
            }, this.props.index * 50);
        }
    }

    public render() {
        const { theme, title, imageUrl, index, selectable } = this.props;
        const Card = styled.div`
            display: flex;
            overflow: hidden;
            height: ${index ? '0%' : '100%'};
            width: ${index ? '0%' : '100%'};
            background: #fff;
            flex-direction: column;
            border-radius: 4px;
            background: ${theme.cardBackground};
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
                0 1px 2px rgba(0, 0, 0, 0.24);
            transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
            
            ${
                selectable ?
                `
                cursor: pointer;
                &:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
                        0 10px 10px rgba(0, 0, 0, 0.22);
                }` : null
            }
            
        `;

        const CardHeader = styled.div`
            display: flex;
            flex-direction: row;
            align-items: center;
            height: 60px;
            min-height: 60px;
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
            height: 100%;
        `;

        let image: any;
        if (imageUrl) {
            image = (
                <Image
                    src={imageUrl}
                />
            );
        }

        return (
            <Card ref={this.cardRef}>
                <CardHeader>
                    <h3>{title}</h3>
                    {image}
                </CardHeader>
                <CardBody>
                    {this.props.children}
                </CardBody>
            </Card>
        );
    }
}

export default Card;
