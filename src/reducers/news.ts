import {FETCH_NEWS} from '../actions/actionTypes'

const initialState = {
    newsList: [],
};

export default function(state: object = initialState, action: any) {
    switch (action.type) {
        case FETCH_NEWS:
            return {
                ...state,
                newsList: action.news,
            }
        default:
        return state;
    }
}
