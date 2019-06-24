import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import {Theme} from '../../constants/types';

interface Props {
    theme: Theme,
}

export class TopList extends React.Component<Props> {

    render() {
        const {theme} = this.props
        const Container = styled.div`
            height: calc(100% - 60px);
            width: 100%;
            display: flex;
            flex-direction: column;
            background: ${theme.main_background};
        `;

        return (
            <Container>
                TopList!
            </Container>
        );
    }
}

export default TopList;
