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

interface FetchValueTimechartAction {
    type: DashboardActionTypes.FETCH_VALUE_TIMECHART;
}

interface FetchVolumeTimechartAction {
    type: DashboardActionTypes.FETCH_VOLUME_TIMECHART;
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

export const fetchValueTimechartData: ActionCreator<
    ThunkAction<Promise<any>, null, null, FetchValueTimechartAction>
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
                    type: DashboardActionTypes.FETCH_VALUE_TIMECHART,
                    data: response.data.Data,
                });
            })
            .catch(error => {
                console.log(error);
            });
    };
};

export const fetchVolumeTimechartData: ActionCreator<
    ThunkAction<Promise<any>, null, null, FetchVolumeTimechartAction>
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
                    type: DashboardActionTypes.FETCH_VOLUME_TIMECHART,
                    data: response.data.Data,
                });
            })
            .catch(error => {
                console.log(error);
            });
    };
};
