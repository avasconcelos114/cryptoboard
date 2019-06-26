import { DashboardActionTypes } from '../actions/actionTypes';

const initialState = {
    options: [],
    selectedOption: 'BTC',
    coinInfo: {
        USD: {
            PRICE: 0,
            VOLUMEDAY: 0,
        }
    },
    exchangeVolume: 0,
    timechartData: [],
};

export default function(state: object = initialState, action: any) {
    switch (action.type) {
        case DashboardActionTypes.FETCH_OPTIONS:
            return {
                ...state,
                options: action.options,
            };
        case DashboardActionTypes.FETCH_COIN_INFO:
            return {
                ...state,
                coinInfo: action.coinInfo,
            };
        case DashboardActionTypes.FETCH_TIMECHART_DATA:
            return {
                ...state,
                timechartData: action.timechartData,
            };
        default:
            return state;
    }
}
