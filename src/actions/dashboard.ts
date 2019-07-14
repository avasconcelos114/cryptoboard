import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';
import { api } from '../constants';
import { DashboardActionTypes } from './actionTypes';

interface FetchOptionsAction {
    type: DashboardActionTypes.FETCH_OPTIONS;
}

interface FetchCoinInfoAction {
    type: DashboardActionTypes.FETCH_COIN_INFO;
}

interface FetchTimechartData {
    type: DashboardActionTypes.FETCH_TIMECHART_DATA;
}

interface ChangeOptionAction {
    type: DashboardActionTypes.CHANGE_OPTION;
}

export const fetchOptions: ActionCreator<
    ThunkAction<Promise<any>, null, null, FetchOptionsAction>
> = () => {
    return async (dispatch: Dispatch) => {
        const config = {
            headers: {
                authorization: `Bearer ${api.token}`,
            },
        };

        let url = `${api.endpoint}/data/top/totalvolfull?limit=10&tsym=USD`;

        await axios
            .get(url, config)
            .then(response => {
                dispatch({
                    type: DashboardActionTypes.FETCH_OPTIONS,
                    data: response.data.Data,
                });
            })
            .catch(error => {
                console.log(error);
            });
    };
};

export const fetchCoinInfo: ActionCreator<
    ThunkAction<Promise<any>, null, null, FetchCoinInfoAction>
> = (symbol: string) => {
    return async (dispatch: Dispatch) => {
        const config = {
            headers: {
                authorization: `Bearer ${api.token}`,
            },
        };

        let url = `${api.endpoint}/data/pricemultifull?fsyms=${symbol}&tsyms=USD`;

        await axios
            .get(url, config)
            .then(response => {
                dispatch({
                    type: DashboardActionTypes.FETCH_COIN_INFO,
                    data: response.data.DISPLAY[symbol],
                });
            })
            .catch(error => {
                console.log(error);
            });
    };
};

export const fetchTimechartData: ActionCreator<
    ThunkAction<Promise<any>, null, null, FetchTimechartData>
> = (symbol: string) => {
    return async (dispatch: Dispatch) => {
        const config = {
            headers: {
                authorization: `Bearer ${api.token}`,
            },
        };

        let url = `${api.endpoint}/data/histoday?fsym=${symbol}&tsym=USD&limit=5`;

        await axios
            .get(url, config)
            .then(response => {
                dispatch({
                    type: DashboardActionTypes.FETCH_TIMECHART_DATA,
                    data: response.data.Data,
                });
            })
            .catch(error => {
                console.log(error);
            });
    };
};

export const changeOption: ActionCreator<
    ThunkAction<Promise<any>, null, null, ChangeOptionAction>
> = (option: string) => {
    return async (dispatch: Dispatch) => {
        dispatch({
            type: DashboardActionTypes.CHANGE_OPTION,
            data: option,
        });
    };
};
