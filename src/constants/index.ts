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
        base_font_color: '#FFFFFF',
        drop_shadow: 'rgba(214,214,214,0.8)',
        drop_shadow_hover: 'rgba(214,214,214,1)',
        header_background: '#37474F',
        loading_background: '#1A237E',
        main_background: '#FAFAFA',
        news_background: '#FFFFFF',
        news_category_line: '#E0E0E0',
        news_category_backgrounds: [
            '#03A9F4',
            '#26C6DA',
            '#26A69A',
            '#3F51B5',
            '#7E57C2',
            '#9C27B0',
            '#AD1457',
            '#4527A0',
        ],
        sidebar_background: '#37474F',
        sidebar_font_color: '#FFFFFF',
    },
    light: {
        base_font_color: '#000000',
        drop_shadow: 'rgba(214,214,214,0.4)',
        drop_shadow_hover: 'rgba(214,214,214,0.6)',
        header_background: '#FFFFFF',
        loading_background: '#FAFAFA',
        main_background: '#FAFAFA',
        news_background: '#FFFFFF',
        news_category_line: '#E0E0E0',
        news_category_backgrounds: [
            '#03A9F4',
            '#26C6DA',
            '#26A69A',
            '#3F51B5',
            '#7E57C2',
            '#9C27B0',
            '#AD1457',
            '#4527A0',
        ],
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