interface Store {
    dashboard: any
}

export const getOptions = (store: Store) => {
    return store.dashboard.options
} 

export const getDailyAverage = (store: Store) => {
    return store.dashboard.dailyAverage
} 

export const getExchangeVolume = (store: Store) => {
    return store.dashboard.exchangeVolume
} 

export const getTimechartData = (store: Store) => {
    return store.dashboard.timechartData
} 