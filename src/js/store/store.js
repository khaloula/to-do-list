import {configureStore} from '@reduxjs/toolkit'

import rootReducer from '../reducers/index';

const store = configureStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION__())

export default store