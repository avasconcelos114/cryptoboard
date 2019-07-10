import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchTopList } from '../../actions/topList';
import selector from '../../selectors';
import TopList from './topList';

function mapStateToProps(state) {
    const theme = selector.getTheme(state);
    const topList = selector.getTopList(state);
    return {
        theme,
        topList,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(
            {
                fetchTopList,
            },
            dispatch,
        ),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TopList);
