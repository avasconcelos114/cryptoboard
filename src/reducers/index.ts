import {combineReducers} from 'redux';
import common from './common';
import news from './news';

export default combineReducers({
    common,
    news,
});
