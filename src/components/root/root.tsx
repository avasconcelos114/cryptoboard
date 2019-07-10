import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { Theme } from '../../constants/types';

import Sidebar from '../sidebar';
import Header from '../header';

import Dashboard from '../dashboard';
import TopList from '../topList';
import News from '../news';
import NotFound from '../notFound';

interface Props {
    theme: Theme;
}

export class Root extends React.Component<Props> {
    public render() {
        const { theme } = this.props;
        const AppContainer = styled.div`
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: row;
            background: ${theme.mainBackground};
        `;

        const MainViewContainer = styled.div`
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
        `;

        return (
            <AppContainer className="App">
                <Sidebar />
                <MainViewContainer>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Dashboard} />
                        <Route path="/dashboard" component={Dashboard} />
                        <Route path="/top_coins" component={TopList} />
                        <Route path="/news" component={News} />
                        <Route component={NotFound} />
                    </Switch>
                </MainViewContainer>
            </AppContainer>
        );
    }
}

export default Root;
