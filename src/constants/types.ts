export interface Theme {
    base_font_color: string,
    drop_shadow: string,
    header_background: string,
    loading_background: string,
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
    tags: string,
    upvotes: string,
    downvotes: string,
}