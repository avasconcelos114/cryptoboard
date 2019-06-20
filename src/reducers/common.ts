import Constants from '../constants';

const initialState = {
    menus: Constants.menuItems,
    activeTheme: 'light',
    theme: Constants.themes['light'],
    isLoading: true,
};

export default function(state: object = initialState, action: any) {
    switch (action.type) {
        
        default:
        return state;
    }
}
