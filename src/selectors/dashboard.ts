interface Store {
    dashboard: any;
}

export const getOptions = (store: Store) => {
    return store.dashboard.options;
};

export const getSelectedOption = (store: Store) => {
    return store.dashboard.selectedOption;
};

export const getCoinInfo = (store: Store) => {
    return store.dashboard.coinInfo;
};

export const getTimechartData = (store: Store) => {
    return store.dashboard.timechartData;
};
