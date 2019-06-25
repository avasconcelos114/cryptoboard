import React from 'react';
import styled from 'styled-components';
import Zdog from 'zdog';
import {Theme} from '../../constants/types';

type Props = {
    isLoading: boolean,
    theme: Theme
}

let illo: any;

export class Loading extends React.Component<Props> {
    componentDidMount() {
        this.drawAnimation()
        
    }

    componentDidUpdate() {
        this.drawAnimation()
    }

    drawAnimation = () => {
        const zoom = 6;
        if (document.querySelector('.zdog-canvas') === null) {
            return
        }

        illo = new Zdog.Illustration({
            element: '.zdog-canvas',
            zoom,
            rotate: { x: -0.4 }
        });

        const TAU = Zdog.TAU;

        // -- illustration shapes --- //

        const teeth = 8;
        const frontZ = {z: 3};
        const backZ = {z: -3};

        const colorA = '#EA0';
        const colorB = '#345';

        const gearPath = ( function() {
            const path = [];
            const teethCount = teeth * 4;
            for (let i=0; i < teethCount; i++) {
                const isOuter = i % 4 < 2;
                const radius = isOuter ? 12 : 9.5;
                let theta = Math.ceil( i/2 ) * 2;
                theta += i % 2 ? -0.2 : 0.2;
                theta = ( theta/teethCount + 1/teethCount ) * TAU ;
                path.push({
                    x: Math.cos( theta ) * radius,
                    y: Math.sin( theta ) * radius,
                });
            }
            return path;
        })();

        const gear = new Zdog.Anchor({
            addTo: illo,
            rotate: { x: TAU/4 },
        });

        const gearSide = new Zdog.Anchor({
            addTo: gear,
            translate: frontZ,
        });
        // gear face
        new Zdog.Shape({
            addTo: gearSide,
            path: gearPath,
            color: colorA,
            backface: false,
            fill: true,
            stroke: 1/zoom,
            closed: false,
        });
        // nub
        new Zdog.Cylinder({
            addTo: gearSide,
            diameter: 6,
            length: 2,
            color: colorB,
            backface: 'white',
            translate: { z: 1 },
            fill: true,
            stroke: false,
        });

        gearSide.copyGraph({
            rotate: { y: TAU/2 },
            translate: backZ,
        });

        gearPath.forEach( function( corner, i ) {
            const nextCorner = gearPath[ i + 1 ] || gearPath[0];
            new Zdog.Shape({
                addTo: gear,
                path: [
                new Zdog.Vector( corner ).add( frontZ ),
                new Zdog.Vector( corner ).add( backZ ),
                new Zdog.Vector( nextCorner ).add( backZ ),
                new Zdog.Vector( nextCorner ).add( frontZ ),
                ],
                color: i % 2 ? colorA : colorB,
                fill: true,
                stroke: 1/zoom,
            });
        });
        this.animate();
    }

    animate = () => {
        illo.rotate.y += 0.009;
        illo.updateRenderGraph();
        requestAnimationFrame(this.animate);
    }

    render() {
        const {theme, isLoading} = this.props;
        const LoadingContainer = styled.div`
            height: 100%;
            width: 100%;
            position: absolute;
            overflow: hidden;
            z-index: 10;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            background: ${theme.loading_background}
        `;
        
        const LoadingCanvas = styled.canvas`
            display: flex;
            z-index: 11;
        `;

        const LoadingMessage = styled.h1`
            color: ${theme.base_font_color};
            letter-spacing: 1.7px;
        `;

        if (isLoading) {
            return (
                <LoadingContainer>
                    <LoadingCanvas className="zdog-canvas" width="240" height="240"></LoadingCanvas>
                    <LoadingMessage>Loading</LoadingMessage>
                </LoadingContainer>
            )
        }
        return null
    }
}

export default Loading;
 