import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { Theme } from '../../constants/types';

interface Props {
    theme: Theme;
}
export class NotFound extends React.Component<Props> {
    public render() {
        const { theme } = this.props;
        const Container = styled.div`
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            ${breakpoint('mobile')`
                height: calc(100% - 60px);
            `}

            ${breakpoint('tablet')`
                height: 100%;
            `}

            color: ${theme.baseFontColor}
        `;

        return (
            <Container>
                <p>{'The page you requested was not found'}</p>
                <p>{'Use the menu options to navigate to a different page.'}</p>
            </Container>
        );
    }
}

export default NotFound;
