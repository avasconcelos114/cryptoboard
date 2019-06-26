import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';

import Root from './components/root';

export class App extends React.Component {
    public render() {
        return (
            <HashRouter>
                <Provider store={store}>
                    <Root />
                </Provider>
            </HashRouter>
        );
    }
}

export default App;
