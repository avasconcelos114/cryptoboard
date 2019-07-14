export interface Theme {
    baseFontColor: string;
    mediumFontColor: string;
    disabledFontColor: string;
    dropShadow: string;
    dropShadowHover: string;
    mainBackground: string;
    cardBackground: string;
    cardLineColor: string;
    newsCategoryBackgrounds: string[];
    sidebarBackground: string;
}

export interface Menu {
    title: string;
    route: string;
}

export interface News {
    id: string;
    title: string;
    imageurl: string;
    url: string;
    categories: string;
    upvotes: string;
    downvotes: string;
    body: string;
}

// Note: The API source is inconsistent with casing of variables returned
export interface Coin {
    CoinInfo: CoinInfo;
    DISPLAY: {
        USD: {
            PRICE: number;
            VOLUMEDAY: number;
            MKTCAP: string;
            HIGHDAY: number;
            LOWDAY: number;
        };
    };
}

export interface CoinInfo {
    Id: number;
    Name: string;
    FullName: string;
    ImageUrl: string;
    USD: {
        PRICE: string;
        VOLUME24HOUR: string;
    }
}

export interface TimechartData {
    close: number;
    high: number;
    low: number;
    open: number;
    time: number;
    volumefrom: number;
    volumeto: number;
    timestamp: string;
}