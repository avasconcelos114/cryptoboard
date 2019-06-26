/* 
   Under normal circumstances I'd be serving a backend server in the same endpoint
   and authenticating the client to retrieve a valid session token. But given the fact that I'm using
   a public API with 100K monthly free calls, I'm just leaving it in the open to allow the app to run
   off anywhere equally.
*/
export const api = {
    token: '328615ca08e935e05a0ddd27d5c746093b35cb0387ecb5b64ff29bc7e63094cb',
    endpoint: 'https://min-api.cryptocompare.com',
};

export const themes = {
    dark: {
        baseFontColor: 'rgba(255, 255, 255, 0.87)',
        mediumFontColor: 'rgba(255, 255, 255, 0.60)',
        disabledFontColor: 'rgba(255, 255, 255, 0.38)',
        dropShadow: 'rgba(214,214,214,0.8)',
        dropShadowHover: 'rgba(214,214,214,1)',
        loadingBackground: '#121212',
        mainBackground: '#121212',
        cardBackground: 'rgba(255, 255, 255, 0.07)',
        cardLineColor: 'rgba(255, 255, 255, 0.11)',
        newsCategoryBackgrounds: [
            '#03A9F4',
            '#26C6DA',
            '#26A69A',
            '#3F51B5',
            '#7E57C2',
            '#9C27B0',
            '#4527A0',
        ],
        sidebarBackground: 'rgba(255, 255, 255, 0.05)',
    },
    light: {
        baseFontColor: 'rgba(0, 0, 0, 0.87)',
        mediumFontColor: 'rgba(0, 0, 0, 0.60)',
        disabledFontColor: 'rgba(0, 0, 0, 0.38)',
        dropShadow: 'rgba(214,214,214,0.4)',
        dropShadowHover: 'rgba(214,214,214,0.6)',
        loadingBackground: '#FAFAFA',
        mainBackground: '#FAFAFA',
        cardBackground: 'rgba(255, 255, 255, 1)',
        cardLineColor: '#E0E0E0',
        newsCategoryBackgrounds: [
            '#03A9F4',
            '#26C6DA',
            '#26A69A',
            '#3F51B5',
            '#7E57C2',
            '#9C27B0',
            '#4527A0',
        ],
        sidebarBackground: '#FFFFFF',
    },
};

export const menuItems = [
    { title: 'Dashboard', route: 'dashboard' },
    { title: 'Top List', route: 'top_coins' },
    // {title: 'All Coins', route: 'all_coins'},
    { title: 'News', route: 'news' },
];

export default {
    themes,
    menuItems,
};
