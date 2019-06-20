export const themes = {
    dark: {
        base_font_color: '#FFFFFF',
        drop_shadow: 'rgba(214,214,214,0.8)',
        header_background: '#37474F',
        loading_background: '#1A237E',
        sidebar_background: '#37474F',
        sidebar_font_color: '#FFFFFF',
    },
    light: {
        base_font_color: '#000000',
        drop_shadow: 'rgba(214,214,214,0.41)',
        header_background: '#FFFFFF',
        loading_background: '#FAFAFA',
        sidebar_background: '#FFFFFF',
        sidebar_font_color: '#464545',
    }
}

export const menuItems = [
    {title: 'Dashboard', route: 'dashboard'},
    {title: 'Top List', route: 'top_coins'},
    {title: 'All Coins', route: 'all_coins'},
    {title: 'News', route: 'news'},
]

export default {
    themes,
    menuItems,
}