export interface Theme {
    base_font_color: string,
    medium_font_color: string,
    disabled_font_color: string,
    drop_shadow: string,
    drop_shadow_hover: string,
    header_background: string,
    loading_background: string,
    main_background: string,
    card_background: string,
    card_line_color: string,
    news_category_backgrounds: string[],
    sidebar_background: string,
    sidebar_font_color: string,
}

export interface Menu {
    title: string,
    route: string,
}

export interface News {
    id: string,
    title: string,
    imageurl: string,
    url: string,
    categories: string,
    upvotes: string,
    downvotes: string,
}

// Note: The API source is inconsistent with casing of variables returned
export interface Coin {
    CoinInfo: {
        Id: number,
        Name: string,
        FullName: string,
        ImageUrl: string,
    },
    DISPLAY: {
        USD: {
            PRICE: number,
            VOLUMEDAY: number,
            MKTCAP: string,
            HIGHDAY: number,
            LOWDAY: number,
        }
    }
}