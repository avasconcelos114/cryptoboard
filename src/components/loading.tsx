import React from 'react';
import styled from 'styled-components';
import Zdog from 'zdog';

type Props = {
    loading: boolean
}

export class Loading extends React.Component<Props> {
    componentDidMount() {
        let illo = new Zdog.Illustration({
            // set canvas with selector
            element: '.zdog-svg',
            dragRotate: true,
        });
        
        // add circle
        new Zdog.Ellipse({
            addTo: illo,
            diameter: 80,
            stroke: 20,
            color: '#636',
        });
        
        // update & render
        illo.updateRenderGraph();
    }
    render() {
        const LoadingContainer = styled.div`
            height: 100%;
            width: 100%;
        `;
        
        const LoadingSvg = styled.svg`
            margin: 0 auto;
            display: block;
        `;

        return (
            <LoadingContainer>
                <LoadingSvg className="zdog-svg" width="480" height="240"></LoadingSvg>
            </LoadingContainer>
        )
    }
}

export default Loading;
