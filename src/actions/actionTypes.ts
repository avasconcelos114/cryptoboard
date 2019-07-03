export enum NewsActionTypes {
    FETCH_NEWS = 'FETCH_NEWS',
}

export enum CommonActionTypes {
    OPEN_SIDEBAR = 'OPEN_SIDEBAR',
    CLOSE_SIDEBAR = 'CLOSE_SIDEBAR',
    TOGGLE_LOADING_OPEN = 'TOGGLE_LOADING_OPEN',
    TOGGLE_LOADING_CLOSED = 'TOGGLE_LOADING_CLOSED',
    TOGGLE_THEME = 'TOGGLE_THEME',
}

export enum TopListActionTypes {
    FETCH_TOP_LIST = 'FETCH_TOP_LIST',
}

export enum DashboardActionTypes {
    FETCH_OPTIONS = 'FETCH_OPTIONS',
    FETCH_COIN_INFO = 'FETCH_COIN_INFO',
    FETCH_VALUE_TIMECHART = 'FETCH_VALUE_TIMECHART',
    FETCH_VOLUME_TIMECHART = 'FETCH_VOLUME_TIMECHART',
}