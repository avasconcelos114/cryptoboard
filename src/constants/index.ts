/* 
   Under normal circumstances I'd be serving a backend server in the same endpoint
   and authenticating the client to retrieve a valid session token. But given the fact that I'm using
   a public API with 100K monthly free calls, I'm just leaving it in the open to allow the app to run
   off anywhere equally.
*/
export const api = {
    token: '328615ca08e935e05a0ddd27d5c746093b35cb0387ecb5b64ff29bc7e63094cb',
    endpoint: 'https://min-api.cryptocompare.com'
}

export const themes = {
    dark: {
        base_font_color: 'rgba(255, 255, 255, 0.87)',
        medium_font_color: 'rgba(255, 255, 255, 0.60)',
        disabled_font_color: 'rgba(255, 255, 255, 0.38)',
        drop_shadow: 'rgba(214,214,214,0.8)',
        drop_shadow_hover: 'rgba(214,214,214,1)',
        header_background: '#37474F',
        loading_background: '#121212',
        main_background: '#121212',
        card_background: 'rgba(255, 255, 255, 0.07)',
        card_line_color: 'rgba(255, 255, 255, 0.11)',
        news_category_backgrounds: [
            '#03A9F4',
            '#26C6DA',
            '#26A69A',
            '#3F51B5',
            '#7E57C2',
            '#9C27B0',
            '#4527A0',
        ],
        sidebar_background: 'rgba(255, 255, 255, 0.05)',
        sidebar_font_color: '#FFFFFF',
    },
    light: {
        base_font_color: 'rgba(0, 0, 0, 0.87)',
        medium_font_color: 'rgba(0, 0, 0, 0.60)',
        disabled_font_color: 'rgba(0, 0, 0, 0.38)',
        drop_shadow: 'rgba(214,214,214,0.4)',
        drop_shadow_hover: 'rgba(214,214,214,0.6)',
        header_background: '#FFFFFF',
        loading_background: '#FAFAFA',
        main_background: '#FAFAFA',
        card_background: 'rgba(255, 255, 255, 1)',
        card_line_color: '#E0E0E0',
        news_category_backgrounds: [
            '#03A9F4',
            '#26C6DA',
            '#26A69A',
            '#3F51B5',
            '#7E57C2',
            '#9C27B0',
            '#4527A0',
        ],
        sidebar_background: '#FFFFFF',
        sidebar_font_color: '#464545',
    }
}

export const menuItems = [
    {title: 'Dashboard', route: 'dashboard'},
    {title: 'Top List', route: 'top_coins'},
    // {title: 'All Coins', route: 'all_coins'},
    {title: 'News', route: 'news'},
]

export default {
    themes,
    menuItems,
}