import {DashboardActionTypes} from '../actions/actionTypes'

const initialState = {
    options: [],
    dailyAverage: 0,
    exchangeVolume: 0,
    timechartData: [],
};

export default function(state: object = initialState, action: any) {
    switch (action.type) {
        case DashboardActionTypes.FETCH_OPTIONS:
            return {
                ...state,
                options: action.options,
            }
        case DashboardActionTypes.FETCH_DAILY_AVERAGE:
            return {
                ...state,
                dailyAverage: action.dailyAverage,
            }
        case DashboardActionTypes.FETCH_EXCHANGE_VOLUME:
            return {
                ...state,
                exchangeVolume: action.exchangeVolume,
            }
        case DashboardActionTypes.FETCH_TIMECHART_DATA:
            return {
                ...state,
                timechartData: action.timechartData
            }
        default:
        return state;
    }
}
