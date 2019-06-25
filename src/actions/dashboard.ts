import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';
import {api} from '../constants';
import {DashboardActionTypes} from './actionTypes'

interface FetchOptionsAction {
    type: DashboardActionTypes.FETCH_OPTIONS,
}

interface FetchDailyAverageAction {
    type: DashboardActionTypes.FETCH_DAILY_AVERAGE,
}

interface FetchExchangeVolumeAction {
    type: DashboardActionTypes.FETCH_EXCHANGE_VOLUME,
}

interface FetchTimechartDataAction {
    type: DashboardActionTypes.FETCH_TIMECHART_DATA,
}

export const fetchOptions: ActionCreator<
  ThunkAction<Promise<any>, null, null, FetchOptionsAction>
> = () => {
  return async (dispatch: Dispatch) => {
    const config = {
        headers: {
            authorization: `Bearer ${api.token}`
        }
    }

    let url = `${api.endpoint}/data/top/totalvolfull?limit=10&tsym=USD`

    await axios.get(url, config)
    .then((response) => {
        dispatch({
            type: DashboardActionTypes.FETCH_OPTIONS,
            options: response.data.Data
        })
    }).catch((error) => {
        console.log(error);
    })
  };
};

export const fetchDailyAverage: ActionCreator<
  ThunkAction<Promise<any>, null, null, FetchDailyAverageAction>
> = () => {
  return async (dispatch: Dispatch) => {
    const config = {
        headers: {
            authorization: `Bearer ${api.token}`
        }
    }

    let url = `${api.endpoint}/data/dayAvg?fsym=BTC&tsym=USD`

    await axios.get(url, config)
    .then((response) => {
        dispatch({
            type: DashboardActionTypes.FETCH_DAILY_AVERAGE,
            dailyAverage: response.data.Data
        })
    }).catch((error) => {
        console.log(error);
    })
  };
};

export const fetchExchangeVolume: ActionCreator<
  ThunkAction<Promise<any>, null, null, FetchExchangeVolumeAction>
> = () => {
  return async (dispatch: Dispatch) => {
    const config = {
        headers: {
            authorization: `Bearer ${api.token}`
        }
    }

    let url = `${api.endpoint}/data/exchange/histoday?tsym=USD&limit=10`

    await axios.get(url, config)
    .then((response) => {
        dispatch({
            type: DashboardActionTypes.FETCH_EXCHANGE_VOLUME,
            exchangeVolume: response.data.Data
        })
    }).catch((error) => {
        console.log(error);
    })
  };
};

export const fetchTimechartData: ActionCreator<
  ThunkAction<Promise<any>, null, null, FetchTimechartDataAction>
> = () => {
  return async (dispatch: Dispatch) => {
    const config = {
        headers: {
            authorization: `Bearer ${api.token}`
        }
    }

    let url = `${api.endpoint}/data/histoday?fsym=BTC&tsym=USD&limit=10`

    await axios.get(url, config)
    .then((response) => {
        dispatch({
            type: DashboardActionTypes.FETCH_TIMECHART_DATA,
            timechartData: response.data.Data
        })
    }).catch((error) => {
        console.log(error);
    })
  };
};