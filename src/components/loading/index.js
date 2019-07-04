import { connect } from 'react-redux';

import Loading from './loading';

function mapStateToProps(state) {
    const theme = selector.getTheme(state);
    return {
        theme,
    };
}

export default connect(mapStateToProps)(Loading);
