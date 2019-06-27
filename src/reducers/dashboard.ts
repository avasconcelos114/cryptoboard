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
    valueTimechart: [],
    volumeTimechart: [],
};

export default function(state: object = initialState, action: any) {
    switch (action.type) {
        case DashboardActionTypes.FETCH_OPTIONS:
            return {
                ...state,
                options: action.data,
            };
        case DashboardActionTypes.FETCH_COIN_INFO:
            return {
                ...state,
                coinInfo: action.data,
            };
        case DashboardActionTypes.FETCH_VALUE_TIMECHART:
            return {
                ...state,
                valueTimechart: action.data,
            };
        case DashboardActionTypes.FETCH_VOLUME_TIMECHART:
            return {
                ...state,
                volumeTimechart: action.data,
            }
        default:
            return state;
    }
}
