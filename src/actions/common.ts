import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { CommonActionTypes } from './actionTypes';

interface OpenSidebarAction {
    type: CommonActionTypes.OPEN_SIDEBAR;
}

interface CloseSidebarAction {
    type: CommonActionTypes.CLOSE_SIDEBAR;
}

interface ToggleThemeAction {
    type: CommonActionTypes.TOGGLE_THEME;
}

export const openSidebar: ActionCreator<
    ThunkAction<Promise<any>, null, null, OpenSidebarAction>
> = () => {
    return async (dispatch: Dispatch) => {
        dispatch({
            type: CommonActionTypes.OPEN_SIDEBAR,
        });
    };
};

export const closeSidebar: ActionCreator<
    ThunkAction<Promise<any>, null, null, CloseSidebarAction>
> = () => {
    return async (dispatch: Dispatch) => {
        dispatch({
            type: CommonActionTypes.CLOSE_SIDEBAR,
        });
    };
};

export const toggleTheme: ActionCreator<
    ThunkAction<Promise<any>, null, null, ToggleThemeAction>
> = (theme: string) => {
    return async (dispatch: Dispatch) => {
        dispatch({
            type: CommonActionTypes.TOGGLE_THEME,
            theme,
        });
    };
};
