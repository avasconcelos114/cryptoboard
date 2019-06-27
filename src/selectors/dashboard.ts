interface Store {
    dashboard: any;
}

export const getOptions = (store: Store) => {
    return store.dashboard.options;
};

export const getSelectedOption = (store: Store) => {
    return store.dashboard.selectedOption
}

export const getCoinInfo = (store: Store) => {
    return store.dashboard.coinInfo;
};

export const getValueTimechart = (store: Store) => {
    return store.dashboard.valueTimechart;
};

export const getVolumeTimechart = (store: Store) => {
    return store.dashboard.volumeTimechart;
}