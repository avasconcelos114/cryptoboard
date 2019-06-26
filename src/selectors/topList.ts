interface Store {
    topList: any;
}

export const getTopList = (store: Store) => {
    console.log(store);
    return store.topList.topList;
};
