import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchNews } from '../../actions/news';
import NewsList from './newsList';
import selector from '../../selectors';

function mapStateToProps(state) {
    const theme = selector.getTheme(state);
    const newsList = selector.getNews(state);
    return {
        theme,
        newsList,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(
            {
                fetchNews,
            },
            dispatch,
        ),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(NewsList);
