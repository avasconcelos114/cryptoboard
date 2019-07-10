interface Store {
    common: any;
}

export const getMenuItems = (store: Store) => {
    return store.common.menus;
};

export const getTheme = (store: Store) => {
    return store.common.theme;
};

export const getSidebarState = (store: Store) => {
    return store.common.isSidebarOpen;
};
