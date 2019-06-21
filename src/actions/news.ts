import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';
import {FETCH_NEWS} from './actionTypes';
import {api} from '../constants';

enum NewsActionTypes {
    FETCH_NEWS = 'FETCH_NEWS'
}

interface FetchNewsAction {
    type: NewsActionTypes.FETCH_NEWS,
}

export const fetchNews: ActionCreator<
  ThunkAction<Promise<any>, null, null, FetchNewsAction>
> = () => {
  return async (dispatch: Dispatch) => {
    const config = {
        headers: {
            authorization: `Bearer ${api.token}`
        }
    }
    await axios.get(`${api.endpoint}/data/v2/news/?lang=EN`, config)
    .then((response) => {
        dispatch({
            type: FETCH_NEWS,
            news: response.data.Data
        })
    }).catch((error) => {
        console.log(error);
    })
  };
};