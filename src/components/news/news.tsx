import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import {Theme} from '../../constants/types';

interface Props {
    theme: Theme,
}

export class News extends React.Component<Props> {

    render() {
        const {theme} = this.props;
        const Container = styled.div`
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
        `;

        return (
            <Container>
                NEWS! :D
            </Container>
        );
    }
}

export default News ;
