import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';
import { api } from '../constants';
import { NewsActionTypes } from './actionTypes';

interface FetchNewsAction {
    type: NewsActionTypes.FETCH_NEWS;
}

export const fetchNews: ActionCreator<
    ThunkAction<Promise<any>, null, null, FetchNewsAction>
> = (category: string) => {
    return async (dispatch: Dispatch) => {
        const config = {
            headers: {
                authorization: `Bearer ${api.token}`,
            },
        };

        let url = `${api.endpoint}/data/v2/news/?lang=EN`;

        if (category) {
            url += category;
        }

        await axios
            .get(url, config)
            .then(response => {
                dispatch({
                    type: NewsActionTypes.FETCH_NEWS,
                    news: response.data.Data,
                });
            })
            .catch(error => {
                console.log(error);
            });
    };
};
