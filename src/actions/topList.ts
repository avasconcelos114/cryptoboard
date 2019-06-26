import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';
import { api } from '../constants';
import { TopListActionTypes } from './actionTypes';

interface FetchTopListAction {
    type: TopListActionTypes.FETCH_TOP_LIST;
}

export const fetchTopList: ActionCreator<
    ThunkAction<Promise<any>, null, null, FetchTopListAction>
> = () => {
    return async (dispatch: Dispatch) => {
        const config = {
            headers: {
                authorization: `Bearer ${api.token}`,
            },
        };

        let url = `${api.endpoint}/data/top/totalvolfull?limit=50&tsym=USD`;

        await axios
            .get(url, config)
            .then(response => {
                dispatch({
                    type: TopListActionTypes.FETCH_TOP_LIST,
                    topList: response.data.Data,
                });
            })
            .catch(error => {
                console.log(error);
            });
    };
};
