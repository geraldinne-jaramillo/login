import React from 'react';
import { Provider } from 'react-redux';
import {store} from './store/store';
import { AuthRouter } from './routers/AuthRouter';

export const JournalApp = () => {
    return (
        <Provider store={store}>
            <AuthRouter />
        </Provider>
    )
}
