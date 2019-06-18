import React from 'react';
import {BrowserRouter} from "react-router-dom";
import styled from 'styled-components';

import Sidebar from './containers/sidebar';
import Loading from './components/loading';
import './App.css';

export class App extends React.Component {
    render() {
        const AppContainer = styled.div`
            height: 100%;
            width: 100%;
            display: flex;
        `;

        return (
            <BrowserRouter>
                <AppContainer className="App">
                    <Loading loading={false}/>
                    <Sidebar />
                </AppContainer>
            </BrowserRouter>
        );
    }
}

export default App;
