import {combineReducers} from 'redux';
import common from './common';
import news from './news';
import topList from './topList';

export default combineReducers({
    common,
    news,
    topList,
});
