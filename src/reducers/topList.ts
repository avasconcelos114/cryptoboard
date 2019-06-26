import { TopListActionTypes } from '../actions/actionTypes';

const initialState = {
    topList: [],
};

export default function(state: object = initialState, action: any) {
    switch (action.type) {
        case TopListActionTypes.FETCH_TOP_LIST:
            return {
                ...state,
                topList: action.topList,
            };
        default:
            return state;
    }
}
