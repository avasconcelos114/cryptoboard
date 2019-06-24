import {NewsActionTypes} from '../actions/actionTypes'

const initialState = {
    newsList: [],
    categories: [],
    activeCategory: '',
};

export default function(state: object = initialState, action: any) {
    switch (action.type) {
        case NewsActionTypes.FETCH_NEWS:
            return {
                ...state,
                newsList: action.news,
            }
        default:
        return state;
    }
}
