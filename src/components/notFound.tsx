import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export class News extends React.Component {

    render() {
        const Container = styled.div`
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
        `;

        return (
            <Container>
                Not found D:
            </Container>
        );
    }
}

export default News ;
