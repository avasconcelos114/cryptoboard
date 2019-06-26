import * as common from './common';
import * as news from './news';
import * as topList from './topList';
import * as dashboard from './dashboard';

export default {
    ...common,
    ...dashboard,
    ...news,
    ...topList,
};
