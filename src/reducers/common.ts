import Constants from '../constants';
import { CommonActionTypes } from '../actions/actionTypes';

const initialState = {
    menus: Constants.menuItems,
    theme: Constants.themes['light'],
    isLoading: false,
    isSidebarOpen: false,
};

export default function(state: any = initialState, action: any) {
    switch (action.type) {
        case CommonActionTypes.OPEN_SIDEBAR:
            return {
                ...state,
                isSidebarOpen: true,
            };
        case CommonActionTypes.CLOSE_SIDEBAR:
            return {
                ...state,
                isSidebarOpen: false,
            };
        case CommonActionTypes.TOGGLE_LOADING_OPEN:
            return {
                ...state,
                isLoading: true,
            };
        case CommonActionTypes.TOGGLE_LOADING_CLOSED:
            return {
                ...state,
                isLoading: false,
            };
        case CommonActionTypes.TOGGLE_THEME:
            return {
                ...state,
                // @ts-ignore
                theme: Constants.themes[action.theme],
            };
        default:
            return state;
    }
}
