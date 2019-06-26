import { combineReducers } from 'redux';
import common from './common';
import news from './news';
import topList from './topList';
import dashboard from './dashboard';

export default combineReducers({
    common,
    dashboard,
    news,
    topList,
});
