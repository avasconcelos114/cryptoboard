interface Store {
    news: any;
}

export const getNews = (store: Store) => {
    return store.news.newsList;
};
