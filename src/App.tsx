import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import styled from 'styled-components';

import './App.css';
import store from './store';

import Sidebar from './components/sidebar';
import Header from './components/header';
import Loading from './components/loading';
import News from './components/news';
import NotFound from './components/notFound';

export class App extends React.Component {
    render() {
        const AppContainer = styled.div`
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: row;
        `;

        const MainViewContainer = styled.div`
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
        `;

        return (
            <BrowserRouter>
                <Provider store={store}>
                    <AppContainer className="App">
                        <Loading loading={false}/>
                        <Sidebar />
                        <MainViewContainer>
                            <Header />
                            <Switch>
                                <Route path="/news" component={News}/>
                                <Route component={NotFound}/>
                            </Switch>
                        </MainViewContainer>
                    </AppContainer>
                </Provider>
            </BrowserRouter>
        );
    }
}

export default App;
