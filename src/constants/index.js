const themes = {
    dark: {
        base_font_color: '#FFFFFF',
        loading_background: '#1A237E',
        sidebar_color: '#303F9F',
    },
    light: {
        base_font_color: '#000000',
        loading_background: '#FAFAFA',
        sidebar_color: '#303F9F',
    }
}

export default {
    themes,
    menuItems: [
        {title: 'Dashboard', url: '/dashboard'},
        {title: 'Top List', url: '/toplists'},
        {title: 'All Coins', url: '/coinlist'},
        {title: 'News', url: '/news'},
    ],
}