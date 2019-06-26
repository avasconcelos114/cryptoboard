import React from 'react';
import styled from 'styled-components';
import { Theme } from '../../constants/types';

interface Props {
    theme: Theme;
}

export class CoinList extends React.Component<Props> {
    public render() {
        const { theme } = this.props;
        const Container = styled.div`
            height: calc(100% - 60px);
            width: 100%;
            display: flex;
            flex-direction: column;
            background: ${theme.mainBackground};
        `;

        return <Container>CoinList!</Container>;
    }
}

export default CoinList;
