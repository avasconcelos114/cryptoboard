import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import store from './store';

import Root from './components/root';

export class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Provider store={store}>
                    <Root />
                </Provider>
            </BrowserRouter>
        );
    }
}

export default App;