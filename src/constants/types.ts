export interface Theme {
    base_font_color: string,
    drop_shadow: string,
    drop_shadow_hover: string,
    header_background: string,
    loading_background: string,
    main_background: string,
    news_background: string,
    news_category_line: string,
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