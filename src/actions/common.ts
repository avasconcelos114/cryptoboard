import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import {CommonActionTypes} from './actionTypes'

interface OpenSidebarAction {
    type: CommonActionTypes.OPEN_SIDEBAR
}

interface CloseSidebarAction {
    type: CommonActionTypes.CLOSE_SIDEBAR
}

interface OpenLoadingAction {
    type: CommonActionTypes.TOGGLE_LOADING_OPEN
}

interface CloseLoadingAction {
    type: CommonActionTypes.TOGGLE_LOADING_CLOSED
}

export const openSidebar: ActionCreator<
  ThunkAction<Promise<any>, null, null, OpenSidebarAction>
> = () => {
  return async (dispatch: Dispatch) => {
    dispatch({
        type: CommonActionTypes.OPEN_SIDEBAR
    })
  };
};

export const closeSidebar: ActionCreator<
  ThunkAction<Promise<any>, null, null, CloseSidebarAction>
> = () => {
  return async (dispatch: Dispatch) => {
    dispatch({
        type: CommonActionTypes.CLOSE_SIDEBAR
    })
  };
};

export const openLoadingScreen: ActionCreator<
  ThunkAction<Promise<any>, null, null, OpenLoadingAction>
> = () => {
  return async (dispatch: Dispatch) => {
    dispatch({
        type: CommonActionTypes.TOGGLE_LOADING_OPEN
    })
  };
};

export const closeLoadingScreen: ActionCreator<
  ThunkAction<Promise<any>, null, null, CloseLoadingAction>
> = () => {
  return async (dispatch: Dispatch) => {
    dispatch({
        type: CommonActionTypes.TOGGLE_LOADING_CLOSED
    })
  };
};