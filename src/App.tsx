import React from 'react';
import Loading from './components/loading';
import styled from 'styled-components';
import './App.css'

const AppContainer = styled.div`
    height: 100%;
    width: 100%;
`;

export class App extends React.Component {
    render() {
        return (
            <AppContainer className="App">
                <Loading loading={true}/>
            </AppContainer>
        );
    }
}

export default App;
